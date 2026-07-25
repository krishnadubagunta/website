export interface GhostPost {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  feature_image: string | null;
  published_at: string;
}

const GHOST_API_URL = "https://blog.krishnadubagunta.com/ghost/api/content";

export async function getLatestPosts(limit = 3): Promise<GhostPost[]> {
  const key = process.env.NEXT_PUBLIC_BLOG_API_KEY;
  if (!key) return [];

  const params = new URLSearchParams({
    key,
    limit: String(limit),
    fields: "id,title,url,excerpt,feature_image,published_at",
  });

  const res = await fetch(`${GHOST_API_URL}/posts/?${params.toString()}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  const data = await res.json();
  return data.posts ?? [];
}
