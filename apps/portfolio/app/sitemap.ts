import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://krishnadubagunta.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/blog'].map(
    (route) => ({
      url: `https://krishnadubagunta.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}