import TypographyH3 from "kd-ui/ui/typography/h3";
import TypographyH4 from "kd-ui/ui/typography/h4";
import TypographyP from "kd-ui/ui/typography/p";
import TypographySmall from "kd-ui/ui/typography/small";
import Link from "next/link";
import { Metadata } from "next";
import { formatDate } from '../_lib/string'
import { Badge } from "kd-ui/ui/badge";
import Icon from 'kd-ui/ui/icon';
import { db } from "@/db";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "kd-ui/ui/card";
import Image from "next/image";

export const revalidate = 1000*60*10;

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
      <TypographyH3 kaisei className="pb-6">read my blog</TypographyH3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {
        posts.map((post) => <Link key={post.id} href={post.link} className="">
          <Card className="flex flex-col justify-between hover:bg-muted h-full">
        <CardHeader >
            <Image
              alt="Image of this blog post"
              src={post.image!}
              className="object-contain rounded-xl"
              height={250}
              width={450}
              fetchPriority="auto"
            />
          <CardTitle>
            <TypographyH4>
              {post.title}
            </TypographyH4>
          </CardTitle>
          <CardDescription>
            <TypographyP>{ post.description?.substring(0, 150) + "..." }</TypographyP>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between align-middle">
          <TypographySmall>{ post.pubDate?.toDateString() }</TypographySmall>
          <Link href={post.link}>
            <ExternalLink height={16} />
          </Link>
        </CardContent>
      </Card>
        </Link>)}
      </div>
    </div>
}
