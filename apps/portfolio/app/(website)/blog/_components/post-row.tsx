import Link from "next/link";
import Image from "next/image";
import TypographyP from "kd-ui/ui/typography/p";
import { ExternalLink } from "lucide-react";

export interface PostRowData {
  id: number;
  image: string | null;
  title: string;
  description: string | null;
  link: string;
  pubDate: Date | null;
  creator: string;
  categories: string[] | null;
}

export default function PostRow({ post, index }: { post: PostRowData; index: number }) {
  return (
    <Link
      href={post.link}
      className="group flex gap-6 border-b border-border py-8"
    >
      <span className="hidden font-serif text-3xl text-foreground/20 sm:block">
        {String(index).padStart(2, "0")}
      </span>
      <div className="flex flex-1 flex-col gap-2">
        {post.categories?.length ? (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {post.categories[0]}
          </span>
        ) : null}
        <h3 className="text-lg font-semibold transition-colors group-hover:underline underline-offset-4">
          {post.title}
        </h3>
        <TypographyP serif className="text-foreground/70 line-clamp-2">
          {post.description}
        </TypographyP>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          <span>{post.creator}</span>
          <span aria-hidden>·</span>
          <span>{post.pubDate?.toDateString()}</span>
          <ExternalLink height={12} className="ml-1" />
        </div>
      </div>
      {post.image ? (
        <Image
          alt="Image of this blog post"
          src={post.image}
          className="hidden aspect-square w-32 shrink-0 rounded-lg bg-muted object-cover transition-opacity group-hover:opacity-90 sm:block"
          height={128}
          width={128}
        />
      ) : null}
    </Link>
  );
}
