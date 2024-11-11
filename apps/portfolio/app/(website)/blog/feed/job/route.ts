import { turso } from "@/app/(website)/_lib/libsql/client";
import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { count, eq } from 'drizzle-orm'
import { randomInt, randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import Parser from 'rss-parser'

type NewFeed = typeof blogTable.$inferInsert

const parser = new Parser({
    customFields: {
        item: [
            ["content:encoded", "content"],
            ["description"],
            ["atom:updated", "lastBuildDate"],
        ]
    }
})
const FEEDS = [
    "https://medium.com/feed/blog-by-kridworks",
    "https://kridworks.substack.com/feed"
]

export async function GET(req: NextRequest) {
    // if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    //     return NextResponse.json(null, { status: 403 })
    // }

    const feedResults = FEEDS.flatMap(async (feedUrl) => {
        const feeds_set= await parser.parseURL(feedUrl);
        const addResults = feeds_set.items.map(async (post) => {
            console.log(post.categories)
            const feedValues: NewFeed = {
                description: post.contentSnippet!,
                title: post.title!,
                content: post.content,
                categories: post.categories,
                creator: post.creator!,
                link: post.link!,
                pubDate: new Date(post.pubDate!),
                summary: post.summary!,
                lastUpdated: post.lastBuildDate ? new Date(post.lastBuildDate) : null
            }
            try {
                const data = await db.select().from(blogTable).where(eq(blogTable.link, post.link!))
                if(data.length === 0) {
                    console.log(await db.insert(blogTable).values(feedValues).returning())
                } else if(post.lastBuildDate && (data[0].lastUpdated?.getTime()??0) < new Date(post.lastBuildDate).getTime()) {
                    console.log(await db.update(blogTable).set(feedValues).where(eq(blogTable.link, post.link!)).returning())
                }
          } catch(e) {
            console.log(e)
          }
        })
        return addResults
    })

    
    return NextResponse.json({ data: feedResults, ok: true })
}