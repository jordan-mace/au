import { getPostsWithMetadata } from '../lib/posts'
import { Metadata } from 'next';
import Posts from './Posts';

const parseMdxDate = (date: string) => {
  const parts = date.split("/");
  const dt = new Date(parseInt(parts[2], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[0], 10));
  return dt;
}

const isInPast = (date: string) => {
  return parseMdxDate(date).getDate() <= new Date().getDate();
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Jordan Mace's blog posts",
  authors: [{ name: "Jordan Mace" }],
  keywords: ["blog", "posts", "articles", "react", "nextjs", "frontend developer", "web developer"],
}

export default async function Page() {
  const posts = await getPostsWithMetadata()

  return (<Posts posts={posts.filter((x) => isInPast(x.createdAt))
    .sort(function (x, y) {
      return parseMdxDate(y.createdAt).getDate() - parseMdxDate(x.createdAt).getDate()
    })} />)
}