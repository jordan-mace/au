import Link from "next/link"
import { Post } from "../lib/posts"


export type PostProps = {
    posts: Post[] | undefined
}

const Posts = (props: PostProps) => {
    const posts = props.posts;


    return (
      <div>
        <ul>
          {posts ? posts
            .map((post) => (
              <div key={post.slug} style={{ paddingBottom: '2rem'}}>
                <Link href={`/blog/${encodeURIComponent(post.slug)}`}><h2>{post.title}</h2></Link>
                <p>{post.createdAt}</p>
              </div>
            )) : <p>No posts found</p>}
        </ul>
      </div>
    )
}

export default Posts;