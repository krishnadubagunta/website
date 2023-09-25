/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "tailwindconfig"],
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    domains: [
      "images.ctfassets.net",
      "downloads.ctfassets.net",
    ]
  },
  experimental: {
    mdxRs: true
  },
}

const withMDX = require('@next/mdx')()
const { withContentlayer } = require('next-contentlayer');
module.exports = withContentlayer(withMDX(nextConfig))
