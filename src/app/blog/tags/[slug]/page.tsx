import { getPostsWithMetadata } from "@/app/lib/posts";
import Posts from "../../Posts";

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const tag = (await params).slug
    const posts = await getPostsWithMetadata();
    const filteredPosts = posts.filter(x => x.keywords.includes(tag));
  
    return (<Posts posts={filteredPosts} />)
  }

  export async function generateStaticParams() {
    const posts = await getPostsWithMetadata();
    const slugs = posts.map(x => x.keywords.split(", ").flat()).flat();
    console.log(slugs)
    return slugs.map(x => ({ slug: x }));
  }