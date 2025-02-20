import { readdirSync } from "fs";

export const getPosts = () => {
    const files: string[] = readdirSync("./src/content", "utf-8");
    return files.map(x => {
        return {
            slug: x.replace('.mdx', '')
        }
    })
}

export interface Post {
    title: string;
    createdAt: string;
    keywords: string;
    slug: string;
}

const getMetadata = async (fileName: string) => {
    const { frontmatter } = await import(`@/content/${fileName}`)

    return {
        title: frontmatter.title,
        createdAt: frontmatter.date,
        keywords: frontmatter.tags,
        slug: fileName.replace('.mdx', ''),
    } as Post
}

export async function getPostsWithMetadata() {
    const files: string[] = readdirSync("./src/content", "utf-8");
    const posts = [];
    for (const file of files) {
        posts.push(await getMetadata(file))
    }
    return posts;
}