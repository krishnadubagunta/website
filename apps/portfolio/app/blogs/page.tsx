import H3 from "kd-ui/ui/typography/h3";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import Small from "kd-ui/ui/typography/small";
import { formatDate } from "../_lib/string";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.krishnadubagunta.com'),
  title: {
    default: 'Blogs',
    template: '%s | Blogs | Krishna Dubagunta (KD)'
  }
}

export default function Page() {
  return (
    <div className="pt-6 flex flex-col sm:w-4/12">
      <H3>read my blog</H3>
      <div className="pt-4">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <div className="pb-4" key={post.slug}>
              <Link href={`/blogs/${post.slug}`}>
                <div className="flex flex-col">
                  <Small className="pb-1 text-neutral-700 dark:text-neutral-300">{post.title}</Small>
                  <Small className="text-neutral-400 dark:text-neutral-600 text-xs">
                    {formatDate(post.publishedAt)}
                  </Small>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
