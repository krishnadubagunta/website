
export default async function sitemap() {
  const routes = ['', '/gallery'].map(
    (route) => ({
      url: `https://krishnadubagunta.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return routes;
}