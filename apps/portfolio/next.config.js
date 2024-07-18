/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "tailwindconfig"],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
      },
      {
        hostname: "downloads.ctfassets.net",
      },
      {
        hostname: "fonts.gstatic.com",
      },
    ],
  },
};

const withMDX = require("@next/mdx")();
const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer(withMDX(nextConfig));
