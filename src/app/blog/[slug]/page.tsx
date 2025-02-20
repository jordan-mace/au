import { getPosts, getPostsWithMetadata } from "@/app/lib/posts";
import styles from './page.module.css'
import { Metadata } from "next";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const posts = await getPostsWithMetadata();
  const thisPost = posts.find(x => x.slug === slug);
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return <div className={styles.post}>
        <h1>{thisPost?.title}</h1>
        <Post />
        {thisPost?.keywords ? <div style={{display: 'flex', gap: '1rem'}}>Tags: {thisPost?.keywords.split(", ").map(x => 
          <Link key={x} href={`/blog/tags/${encodeURIComponent(x)}`} className={styles.keyword}>{x}</Link>
        )}</div> : null}
      </div>
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug
  const posts = await getPostsWithMetadata();
  const thisPost = posts.find(x => x.slug === slug);

  return {
    title: thisPost?.title ?? "Blog post",
    keywords: thisPost?.keywords ?? [],
  }
}

export function generateStaticParams() {
  return getPosts();
}

export const dynamicParams = false