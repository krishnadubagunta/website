import TypographyH3 from "kd-ui/ui/typography/h3";
import BlogCard from "./blog-card";
import { GhostPost } from "@/lib/ghost";

export default function LatestPosts({ posts }: { posts: GhostPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="container max-w-4xl py-10">
      <div className="flex items-baseline justify-between pb-8">
        <TypographyH3 kaisei>latest from the blog</TypographyH3>
        <a
          href="https://blog.krishnadubagunta.com"
          className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
        >
          see all posts →
        </a>
      </div>
      <div className="grid gap-x-12 gap-y-14 sm:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
