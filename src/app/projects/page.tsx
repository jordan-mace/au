import { Metadata } from 'next'
import Link from 'next/link'

const projects = [
    { name: "px to rem", description: "A simple pixel to rem conversion", path: "/projects/px-to-rem" },
]

export const metadata: Metadata = {
    title: "Projects",
    keywords: ["projects", "side projects", "web development", "frontend development"],
    description: "A collection of small side projects I've put together",
}

const Project = ({ name, description, path }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <Link href={path}>View</Link>
        </div>
    )
}

export default async function Page() {
    return (
        <div>
            <h1>Projects</h1>
            <p style={{ paddingBottom: '2rem'}}>This is a collection of small side projects I've put together</p>
            <ul>
                {projects.map(x => <Project key={x.name} {...x} />)}
            </ul>
        </div>
    )
}