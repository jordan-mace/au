import { readdirSync, readFileSync } from "fs";

export const getPosts = () => {
    var files: string[] = readdirSync("./src/content", "utf-8");
    return files.map(x => {
        const mdx = readFileSync(`./src/content/${x}`, "utf-8");
        return {
            slug: x,
            content: mdx
        }
    })
}