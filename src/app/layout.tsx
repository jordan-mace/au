import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import styles from './page.module.css'
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordan Mace",
  authors: [{ name: "Jordan Mace" }],
  description: "Jordan Mace's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <div className={styles.page}>
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
      <GoogleAnalytics gaId="G-MNJ6NXS7F9" />
    </html>
  );
}
