"use client"
import { formatDate } from "@/app/(website)/_lib/string";
import clsx from "clsx";
import { allBlogs } from "contentlayer/generated";
import { BackButton } from "kd-ui/ui/button";
import P from "kd-ui/ui/typography/p";
import Small from "kd-ui/ui/typography/small";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout(props: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  return (
    <section className="flex flex-col md:flex-row">
      <BackButton className='text-neutral-500'>
        <ArrowLeftIcon size={12} />&nbsp;<Small>Blogs</Small>
      </BackButton>
      <div className="md:flex-col md:w-2/12 hidden md:flex pt-6 sm:pr-2 lg:pr-4">
      <P>more articles ...</P>
        <aside className="pt-3 space-y-7">
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post) => 
              {
                return <Link
                className="flex items-start justify-start rounded-md pr-2 hover:dark:text-petite-orchid-300"
                key={post.slug}
                href={`/blogs/${post.slug}`}
              >
                <div className={"flex flex-col"}>
                  <Small className={clsx("pb-2", {
                  "dark:text-white text-black dark:font-normal font-bold": pathname.endsWith(post.slug),
                  "text-neutral-600 dark:text-neutral-400": !pathname.endsWith(post.slug)
                })}>
                    {post.shortTitle}
                  </Small>
                  <Small className="text-neutral-400 dark:text-neutral-700 text-xs">
                    {formatDate(post.publishedAt)}
                  </Small>
                </div>
              </Link>}
            )}
        </aside>
      </div>
      <div className="w-full sm:w-10/12">{props.children}</div>
    </section>
  );
}
