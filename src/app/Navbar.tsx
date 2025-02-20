'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link"
import styles from "./page.module.css"


export default function Navbar() {
const isHome = usePathname() === "/"
    return <div className={styles.navbar} style={{ background: isHome ? 'rgba(0, 0, 0, 0.5)' : 'none', color: isHome ? 'white' : 'black' }}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
    </div>
}
