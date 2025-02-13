/* eslint-disable jsx-a11y/alt-text */
import type { MDXComponents } from 'mdx/types'
import { ImageProps } from 'next/image'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 style={{ textAlign: 'center', paddingBottom: '1rem' }} {...props} />,
    h2: (props) => <h2 style={{ paddingTop: '1rem', paddingBottom: '1rem' }} {...props} />,
    h3: (props) => <h3 style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }} {...props} />,
    p: (props) => <p style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }} {...props} />,
    img: (props) => (
      <Image
        sizes="100vw"
        width={800}
        height={400}
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}