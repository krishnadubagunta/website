import type { MDXComponents } from 'mdx/types'
import H1 from 'kd-ui/ui/typography/h1'
import H4 from 'kd-ui/ui/typography/h4'
import P from 'kd-ui/ui/typography/p'
import TypographyList from 'kd-ui/ui/typography/list'
import Image from 'next/image'
import Link from 'next/link'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
//
// The only remaining consumer of this file is app/(website)/resume/content.mdx
// (the legacy files under content/*.mdx are orphaned and unreferenced), so
// these mappings are tuned for a resume document: masthead name, section-
// header dividers, and job-entry headings.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <H1 kaisei className="tracking-tight">{children}</H1>,
    p: ({ children }) => <P serif>{ children }</P>,
    h2: ({ children }) => (
      <h2 className="mt-10 border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="pt-6 text-base font-semibold text-foreground first:pt-0">
        {children}
      </h3>
    ),
    h4: ({ children }) => <H4>{children}</H4>,
    ul: ({ children }) => <TypographyList>{children}</TypographyList>,
    img: ({ src, alt }) => <Image
    className='rounded-full aspect-square object-cover brightness-110 dark:brightness-100'
      width={250}
      height={250}
      src={src || ''}
      alt={alt || ""}
    />,
    a: ({ children, href }) => <Link href={href || ''} target='_blank' rel='noopener noreferrer'>{children}</Link>,
  }
}
