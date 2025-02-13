import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const remarkPlugins = [remarkFrontmatter, remarkMdxFrontmatter];

const withMDX = createMDX({
  options: {
    remarkPlugins,
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
