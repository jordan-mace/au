import Link from "next/link"
import styles from "./page.module.css"

export default function Footer() {
    return <div className={styles.navbar} style={{ bottom: 0, width: '100%'}}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
    </div>
}