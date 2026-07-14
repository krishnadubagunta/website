import TypographyH3 from "kd-ui/ui/typography/h3";
import TypographyP from "kd-ui/ui/typography/p";
import { Metadata } from "next";
import { db } from "@/db";
import FeaturedPost from "./_components/featured-post";
import PostRow from "./_components/post-row";

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

    const [featured, ...rest] = posts;

    return <div className="container max-w-3xl py-6 lg:py-10">
      <div className="border-b border-border pb-8">
        <TypographyH3 kaisei>read my blog</TypographyH3>
        <TypographyP serif className="pt-2 text-muted-foreground">
          Notes on software, and the landscapes I chase between deploys.
        </TypographyP>
      </div>
      {featured ? (
        <div className="pt-10">
          <FeaturedPost post={featured} />
        </div>
      ) : null}
      <div className="flex flex-col">
        {rest.map((post, i) => <PostRow key={post.id} post={post} index={i + 1} />)}
      </div>
    </div>
}
