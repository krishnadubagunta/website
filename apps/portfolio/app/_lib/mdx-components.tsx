import type { MDXComponents } from 'mdx/types'
import H1 from 'kd-ui/ui/typography/h1'
import Small from 'kd-ui/ui/typography/small'
import H2 from 'kd-ui/ui/typography/h2'
import H3 from 'kd-ui/ui/typography/h3'
import H4 from 'kd-ui/ui/typography/h4'
import Image from 'next/image'

export const mdxComponents: MDXComponents = {
    h1: ({ children }) => H1({ children, kaisei: true }),
    p: ({children}) => <Small variant='light'>{children}</Small>,
    h2: H2,
    h3: ({ children }) => H3({ children, kaisei: true }),
    h4: H4,
    img: (Image as any)
  }