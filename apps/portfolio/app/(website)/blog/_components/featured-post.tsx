import Link from "next/link";
import Image from "next/image";
import TypographyP from "kd-ui/ui/typography/p";
import { kaiseiFont } from "kd-ui/styles/kaiseiFont";
import clsx from "clsx";
import { ExternalLink } from "lucide-react";

export interface FeaturedPostData {
  id: number;
  image: string | null;
  title: string;
  description: string | null;
  link: string;
  pubDate: Date | null;
  creator: string;
  categories: string[] | null;
}

export default function FeaturedPost({ post }: { post: FeaturedPostData }) {
  return (
    <Link href={post.link} className="group block border-b border-border pb-12">
      <Image
        alt="Image of this blog post"
        src={post.image!}
        className="aspect-[2/1] w-full rounded-lg bg-muted object-cover transition-opacity group-hover:opacity-90"
        height={480}
        width={960}
        priority
      />
      <div className="flex flex-col gap-3 pt-6">
        {post.categories?.length ? (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {post.categories[0]}
          </span>
        ) : null}
        <h2
          className={clsx(
            kaiseiFont.className,
            "text-2xl transition-colors group-hover:underline underline-offset-4 sm:text-3xl"
          )}
        >
          {post.title}
        </h2>
        <TypographyP serif className="text-foreground/70">
          {post.description}
        </TypographyP>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          <span>{post.creator}</span>
          <span aria-hidden>·</span>
          <span>{post.pubDate?.toDateString()}</span>
          <ExternalLink height={12} className="ml-1" />
        </div>
      </div>
    </Link>
  );
}
