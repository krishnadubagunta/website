/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "tailwindconfig"],
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
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")();
const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer(withMDX(nextConfig));
