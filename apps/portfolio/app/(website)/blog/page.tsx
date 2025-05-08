import TypographyH3 from "kd-ui/ui/typography/h3";
import TypographyH4 from "kd-ui/ui/typography/h4";
import TypographyP from "kd-ui/ui/typography/p";
import TypographySmall from "kd-ui/ui/typography/small";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "kd-ui/ui/badge";
import { db } from "@/db";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "kd-ui/ui/card";
import Image from "next/image";

export const revalidate = 3600;

interface Post {
    id: number;
    image: string;
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
        orderBy: ({ pubDate, lastUpdated }, { desc }) => [desc(pubDate), desc(lastUpdated)]
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

    return <div className="container max-w-4xl py-6 lg:py-10">
      <TypographyH3 kaisei className="pb-6">read my blog</TypographyH3>
      <div className="grid gap-12 gap-y-16 sm:grid-cols-2">
        {
          posts.map((post) => <Link key={post.id} href={post.link}>
            <article className="max-w-lg group relative flex flex-col space-y-4">
              <Image
                alt="Image of this blog post"
                src={post.image!}
                className="rounded-md border bg-muted transition-colors"
                height={452}
                width={804}
                fetchPriority="high"
                priority={true}
              />
              <TypographyH4>
                {post.title}
              </TypographyH4>
              <TypographyP>{post.description?.substring(0, 150) + "..."}</TypographyP>
              <div className="flex justify-between align-middle">
                <TypographySmall>{post.pubDate?.toDateString()}</TypographySmall>
                <ExternalLink height={16} />
              </div>
          </article>
          </Link>)
        }
      </div>
    </div>
}
