import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Contact Me",
}

export default async function Page() {
    return (
        <div>
            <h1>Contact</h1>
            <p>Feel free to reach out to me via <Link href="mailto:jordz98@gmail.com">email</Link></p>
        </div>
    )
}