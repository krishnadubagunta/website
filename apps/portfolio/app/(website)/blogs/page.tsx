import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import Small from "kd-ui/ui/typography/small";
import { formatDate } from "../_lib/string";
import { Metadata } from "next";
import TypographyH2 from "kd-ui/ui/typography/h2";
import TypographyH3 from "kd-ui/ui/typography/h3";
import TypographyP from "kd-ui/ui/typography/p";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.krishnadubagunta.com'),
  title: {
    default: 'Blogs',
    template: '%s | Blogs | Krishna Dubagunta (KD)'
  },
  keywords: ["blog","adventure","tech","photography"]
}

export default function Page() {
  return (
    <div className="pt-6 flex flex-col">
      <TypographyH3>read my blog</TypographyH3>
      <div className="pt-4">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .filter((blog) => !blog.hide)
          .map((post) => (
            <section className="pb-4" key={post.slug}>
              <Link href={`/blogs/${post.slug}`}>
                <article className="prose flex flex-col">
                  <TypographyH3 className="text-neutral-700 dark:text-neutral-300">{post.title}</TypographyH3>
                  <TypographyP className="text-neutral-700 dark:text-neutral-300 text-xs">{post.summary}</TypographyP>
                  <Small className="text-neutral-400 dark:text-neutral-600 text-xs">
                    { formatDate(post.publishedAt) }
                  </Small>
                </article>
              </Link>
            </section>
          ))}
      </div>
    </div>
  );
}
