import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://krishnadubagunta.com/blogs/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/blogs','/gallery'].map(
    (route) => ({
      url: `https://krishnadubagunta.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}