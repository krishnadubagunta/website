import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from "next/server";
import Parser from 'rss-parser';
import { DOMParser } from 'xmldom'

type NewFeed = typeof blogTable.$inferInsert

const parser = new Parser({
    customFields: {
        item: [
            ["content:encoded", "content"],
            ["description", "description"],
            ["atom:updated", "lastBuildDate"],
        ]
    }
})

interface CustomItem extends Parser.Item {
  content: any;
  "content:encoded": any;
  description: any;
  "atom:updated": any;
  lastBuildDate: any;
}

const FEEDS = [
    "https://medium.com/feed/blog-by-kridworks",
    "https://kridworks.substack.com/feed"
]

function replaceSelfClosingTags(content: string): string {
  const hrRegex = new RegExp(/<hr>/, "gi");
  const imgRegex = new RegExp(/<img (src="[A-Za-z0-9_\/_?=.&:]+")\s?(width="\d+")?\s?(height="\d+")?\s?(alt="")?\s?>/, "gi")
  content = content.replaceAll(hrRegex, "<hr/>")
  content = content.replaceAll(imgRegex, "<img $1 $2 $3 $4 />")
  return content;
}

function getMediumMetadata(feedPost: CustomItem): NewFeed {
  const description = feedPost.description || feedPost.content;
  const descriptionDom = domParser.parseFromString(description, "text/html");
  const image = descriptionDom.getElementsByTagName('img').item(0)?.getAttribute("src");
  const ptags = descriptionDom.getElementsByTagName('p');
  const length = ptags.length;
  let content = "";
  for (let i = 0; i < length;i++) {
    if (content.length > 0) break;
    content += ptags.item(i)?.textContent;
  }
  const title = feedPost.title!;
  const categories = feedPost.categories;
  const creator = feedPost.creator!;
  const link = feedPost.link!;
  const pubDate = new Date(feedPost.pubDate!);
  const summary = feedPost.summary!;
  const lastUpdated = feedPost.lastBuildDate ? new Date(feedPost.lastBuildDate) : null;

  return {
    image,
    title,
    categories,
    creator,
    link,
    pubDate,
    summary,
    lastUpdated,
    description: content,
    content: replaceSelfClosingTags(feedPost.content),
  }
}

function getSubstackMetadata(feedPost: CustomItem): NewFeed {
  const image = feedPost.enclosure?.url;
  const content = feedPost.contentSnippet;
  const title = feedPost.title!;
  const categories = feedPost.categories;
  const creator = feedPost.creator!;
  const link = feedPost.link!;
  const pubDate = new Date(feedPost.pubDate!);
  const summary = feedPost.summary!;
  const lastUpdated = feedPost.lastBuildDate ? new Date(feedPost.lastBuildDate) : null;

  return {
    image,
    title,
    categories,
    creator,
    link,
    pubDate,
    summary,
    lastUpdated,
    description: content,
    content: feedPost.content,
  }
}

const domParser = new DOMParser();

function createNewFeed(feedPost: CustomItem): NewFeed {
  return feedPost.enclosure ? getSubstackMetadata(feedPost) : getMediumMetadata(feedPost);
}

export async function GET(req: NextRequest) {
    // if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    //     return NextResponse.json(null, { status: 403 })
    // }

    const feedResults = FEEDS.flatMap(async (feedUrl) => {
        const feeds_set= await parser.parseURL(feedUrl);
        const addResults = feeds_set.items.map(async (post) => {
          const newFeed = createNewFeed(post);
          try {
              const data = await db.select().from(blogTable).where(eq(blogTable.link, post.link!))
              if(data.length === 0) {
                  await db.insert(blogTable).values(newFeed).returning()
              } else if(post.lastBuildDate && (data[0].lastUpdated?.getTime()??0) < new Date(post.lastBuildDate).getTime()) {
                  await db.update(blogTable).set(newFeed).where(eq(blogTable.link, post.link!)).returning()
              }
          } catch(e) {
            console.log(e)
          }
        })
        return addResults
    })


    return NextResponse.json({ data: feedResults, ok: true })
}
