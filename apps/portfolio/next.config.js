const createMDX =  require('@next/mdx')

 
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ["ui", "tailwindconfig", "lucide-react"],
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
    mdxRs: true
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [],
    remarkPlugins: []
  }
})

module.exports = withMDX(nextConfig);
