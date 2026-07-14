import Link from "next/link";
import Image from "next/image";
import TypographyH4 from "kd-ui/ui/typography/h4";
import TypographyP from "kd-ui/ui/typography/p";
import TypographySmall from "kd-ui/ui/typography/small";
import { ExternalLink } from "lucide-react";

export interface BlogPost {
  id: number;
  image: string | null;
  title: string;
  description: string | null;
  link: string;
  pubDate: Date | null;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={post.link} className="group">
      <article className="max-w-lg relative flex flex-col gap-3">
        <Image
          alt="Image of this blog post"
          src={post.image!}
          className="aspect-[1.91/1] w-full rounded-lg object-cover bg-muted transition-opacity group-hover:opacity-90"
          height={420}
          width={804}
          fetchPriority="high"
          priority={true}
        />
        <TypographyH4 className="transition-colors group-hover:underline underline-offset-4">
          {post.title}
        </TypographyH4>
        <TypographyP serif className="text-foreground/70">
          {post.description?.substring(0, 150) + "..."}
        </TypographyP>
        <div className="flex justify-between items-center pt-1">
          <TypographySmall className="text-muted-foreground">
            {post.pubDate?.toDateString()}
          </TypographySmall>
          <ExternalLink height={14} className="text-muted-foreground" />
        </div>
      </article>
    </Link>
  );
}
