import nextMdx from '@next/mdx';


const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ["ui", "tailwindconfig", "lucide-react", "next-mdx-remote"],
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
      },
      {
        hostname: "cdn-images-1.medium.com",
      },
      {
        hostname: "substackcdn.com",
      },
      {
        hostname: "substack-post-media.s3.amazonaws.com",
      },
      {
        hostname: "images.unsplash.com",
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
    mdxRs: true
  },
};

const withMDX = nextMdx({
  options: {
    rehypePlugins: [],
    remarkPlugins: []
  }
})

export default withMDX(nextConfig);
