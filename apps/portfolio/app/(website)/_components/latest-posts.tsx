import Link from "next/link";
import TypographyH3 from "kd-ui/ui/typography/h3";
import BlogCard, { BlogPost } from "../blog/_components/blog-card";

export default function LatestPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="container max-w-4xl py-10">
      <div className="flex items-baseline justify-between pb-8">
        <TypographyH3 kaisei>latest from the blog</TypographyH3>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
        >
          see all posts →
        </Link>
      </div>
      <div className="grid gap-x-12 gap-y-14 sm:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
