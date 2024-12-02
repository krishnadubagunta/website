import type { MDXComponents } from 'mdx/types'
import H1 from 'kd-ui/ui/typography/h1'
import H2 from 'kd-ui/ui/typography/h2'
import H3 from 'kd-ui/ui/typography/h3'
import H4 from 'kd-ui/ui/typography/h4'
import P from 'kd-ui/ui/typography/p'
import Image from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
//

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: ({ children }) => <H1>{children}</H1>,
    p: ({ children }) => <P>{ children }</P>,
    h2: ({ children }) => <H2 kaisei className='p-2'>{children}</H2>,
    h3: ({ children }) => <H3 kaisei className='p-2'>{children}</H3>,
    h4: ({ children }) => <H4>{children}</H4>,
    img: ({ src, alt }) => <Image
    className='rounded-full aspect-square object-cover brightness-110 dark:brightness-100'
      width={250}
      height={250}
      src={src || ''}
      alt={alt || ""}
    />,
  }
}
