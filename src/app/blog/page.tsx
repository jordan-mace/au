import Link from 'next/link'
import { getPostsWithMetadata } from '../lib/posts'
import { Metadata } from 'next';

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

  return (
    <div>
      <ul>
        {posts.filter((x) => isInPast(x.createdAt))
          .sort(function (x, y) {
            return parseMdxDate(y.createdAt).getDate() - parseMdxDate(x.createdAt).getDate()
          })
          .map((post) => (
            <div key={post.slug} style={{ paddingBottom: '2rem'}}>
              <Link href={`/blog/${encodeURIComponent(post.slug)}`}><h2>{post.title}</h2></Link>
              <p>{post.createdAt}</p>
            </div>
          ))}
      </ul>
    </div>
  )
}