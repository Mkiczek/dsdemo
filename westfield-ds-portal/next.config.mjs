/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default nextConfig;
