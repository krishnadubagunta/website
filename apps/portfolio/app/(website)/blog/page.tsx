import TypographyH3 from "kd-ui/ui/typography/h3";
import TypographyP from "kd-ui/ui/typography/p";
import TypographySmall from "kd-ui/ui/typography/small";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "kd-ui/ui/badge";
import Icon from 'kd-ui/ui/icon';
import { db } from "@/db";
import { ExternalLink } from "lucide-react";

export const revalidate = 100;

interface Post {
    id: number;
    title: string;
    description: string;
    content: string;
    categories: string,
    link: string;
    pubDate: string;
    lastUpdated: string;
    creator: string;
}

export const metadata: Metadata = {
    metadataBase: new URL('https://www.krishnadubagunta.com'),
    title: {
      default: 'Blogs',
      template: '%s | Blogs | Krishna Dubagunta (KD)'
    },
    keywords: ["blog","adventure","tech","photography"]
  }

export default async function Blog() {
    const posts = await db.query.blogTable.findMany({
        orderBy: ({ pubDate, lastUpdated }, { desc }) => desc(pubDate) && desc(lastUpdated)
    })

    function CategoryComp({ categories }: { categories: string[] | null}) {
        if(!categories) return <></>

        return <div className="flex gap-2 pt-2">
            {
                categories.map(category => <Badge variant={'defaultNoInteraction'} className="bg-gray-400" key={category}>
                    <TypographySmall>{category}</TypographySmall>
                </Badge>)
            }
        </div>
    }

    return <div className="pt-6 flex flex-col space-y-4">
      <TypographyH3 kaisei>read my blog</TypographyH3>
      <div>
      {
            posts.map((post) => <section key={post.id}>
              <article className="w-full lg:w-6/12 flex flex-col hover:bg-muted p-4 rounded-sm">
            <Link href={post.link} target="__blank">
                <div className="flex items-center justify-between">
                    <TypographyH3>{post.title}</TypographyH3>
                    <ExternalLink height={16} />
                </div>
                <TypographyP className="py-2">{post.description}</TypographyP>
                <div className="flex justify-between py-2">
                    <TypographySmall className="text-xs">
                        { post.pubDate?.toDateString() }
                    </TypographySmall>
                    { post.lastUpdated && <TypographySmall className="text-xs">
                        Updated on: { post.lastUpdated?.toDateString() }
                    </TypographySmall>}
                </div>
            </Link>
              </article>
          </section>)
        }
      </div>
    </div>
}
