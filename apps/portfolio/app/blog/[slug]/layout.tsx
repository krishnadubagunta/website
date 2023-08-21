"use client"
import { formatDate } from "@/app/_lib/string";
import clsx from "clsx";
import { allBlogs } from "contentlayer/generated";
import { BackButton, Button } from "kd-ui/ui/button";
import H3 from "kd-ui/ui/typography/h3";
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
        <P className="pb-1">more articles</P>
        <aside>
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post) => 
              {
                console.log(pathname.endsWith(post.slug))
                return <Link
                className="flex items-start justify-start rounded-md pr-2 pt-2 pb-2 hover:dark:text-petite-orchid-300"
                key={post.slug}
                href={`/blog/${post.slug}`}
              >
                <div className={"flex flex-col"}>
                  <Small className={clsx("pb-0.5 ", {
                  "dark:text-white text-black dark:font-normal font-bold!important": pathname.endsWith(post.slug),
                  "text-neutral-600 dark:text-neutral-400": !pathname.endsWith(post.slug)
                })}>
                    {post.shortTitle}
                  </Small>
                  <Small className="text-neutral-400 dark:text-neutral-700 text-xs!important">
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
