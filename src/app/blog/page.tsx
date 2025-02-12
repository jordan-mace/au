import Link from 'next/link'
import { getPosts } from '../lib/posts'
 
export default async function Page() {
  const posts = getPosts()
 
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.slug}</Link>
        </li>
      ))}
    </ul>
  )
}