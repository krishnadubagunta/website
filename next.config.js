module.exports = {
  async redirects() {
    return [
      {
        source: '/photography',
        destination: '/photography/film',
        permanent: true
      }
    ]
  },
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      "images.ctfassets.net",
      "downloads.ctfassets.net"
    ]
  },
}