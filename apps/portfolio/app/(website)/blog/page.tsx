import TypographyH3 from "kd-ui/ui/typography/h3";
import TypographySmall from "kd-ui/ui/typography/small";
import { Metadata } from "next";
import { Badge } from "kd-ui/ui/badge";
import { db } from "@/db";
import BlogCard from "./_components/blog-card";

export const revalidate = 3600;

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
      <TypographyH3 kaisei className="pb-8">read my blog</TypographyH3>
      <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
        {
          posts.map((post) => <BlogCard key={post.id} post={post} />)
        }
      </div>
    </div>
}
