import { readdirSync } from "fs";

export const getPosts = () => {
    const files: string[] = readdirSync("./src/content", "utf-8");
    return files.map(x => {
        return {
            slug: x.replace('.mdx', '')
        }
    })
}

const getMetadata = async (fileName: string) => {
    const { frontmatter } = await import(`@/content/${fileName}`)

    return {
        title: frontmatter.title,
        createdAt: frontmatter.date,
        keywords: frontmatter.keywords,
        slug: fileName.replace('.mdx', ''),
    }
}

export async function getPostsWithMetadata() {
    const files: string[] = readdirSync("./src/content", "utf-8");
    const posts = [];
    for (const file of files) {
        posts.push(await getMetadata(file))
    }
    return posts;
}