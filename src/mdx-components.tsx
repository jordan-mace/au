/* eslint-disable jsx-a11y/alt-text */
import type { MDXComponents } from 'mdx/types'
import { ImageProps } from 'next/image'
import Image from 'next/image'
import styles from './app/page.module.css'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 style={{ textAlign: 'center', paddingBottom: '1rem' }} {...props} />,
    h2: (props) => <h2 style={{ paddingTop: '1rem', paddingBottom: '1rem' }} {...props} />,
    h3: (props) => <h3 style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }} {...props} />,
    p: (props) => <p style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }} {...props} />,
    a: (props) => <a style={{ textDecoration: 'underline' }} {...props} />,
    img: (props) => (
      <Image
        className={styles.imageContainer}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33w"
        width={800}
        height={400}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}