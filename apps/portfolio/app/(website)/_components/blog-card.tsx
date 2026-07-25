import Image from "next/image";
import TypographyH4 from "kd-ui/ui/typography/h4";
import TypographyP from "kd-ui/ui/typography/p";
import TypographySmall from "kd-ui/ui/typography/small";
import { GhostPost } from "@/lib/ghost";

export default function BlogCard({ post }: { post: GhostPost }) {
  return (
    <a href={post.url} className="group block">
      <article className="max-w-lg relative flex flex-col gap-4">
        {post.feature_image ? (
          <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
            <Image
              alt={post.title}
              src={post.feature_image}
              className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
              height={420}
              width={630}
            />
          </div>
        ) : null}
        <div className="flex flex-col gap-2">
          <TypographySmall className="text-xs uppercase tracking-widest text-muted-foreground">
            {new Date(post.published_at).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </TypographySmall>
          <TypographyH4 kaisei className="transition-colors group-hover:underline underline-offset-4">
            {post.title}
          </TypographyH4>
          <TypographyP serif className="text-foreground/70 line-clamp-2">
            {post.excerpt}
          </TypographyP>
        </div>
      </article>
    </a>
  );
}
