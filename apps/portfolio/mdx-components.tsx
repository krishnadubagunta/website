import type { MDXComponents } from 'mdx/types'
import H1 from 'kd-ui/ui/typography/h1'
import H2 from 'kd-ui/ui/typography/h2'
import H3 from 'kd-ui/ui/typography/h3'
import H4 from 'kd-ui/ui/typography/h4'
import P from 'kd-ui/ui/typography/P'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: H1,
    p: P,
    h2: H2,
    h3: H3,
    h4: H4,
    ...components,
  }
}