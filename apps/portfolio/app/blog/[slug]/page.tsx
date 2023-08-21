import { allBlogs } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import type { MDXComponents } from 'mdx/types'
import { notFound, usePathname } from 'next/navigation'
import H1 from 'kd-ui/ui/typography/h1'
import H2 from 'kd-ui/ui/typography/h2'
import H3 from 'kd-ui/ui/typography/h3'
import H4 from 'kd-ui/ui/typography/h4'
import P from 'kd-ui/ui/typography/P'

const mdxComponents: MDXComponents = {
    h1: ({ children }) => H1({ children, kaisei: true }),
    p: P,
    h2: H2,
    h3: ({ children }) => H3({ children, kaisei: true }),
    h4: H4,
    img: (Image as any)
  }

export default async function Blog({ params }: { params: { slug: string } }) {
    const post = allBlogs.find((blog: any) => blog._raw.flattenedPath === params.slug)

    // 404 if the post does not exist.
    if (!post) notFound()

    // Parse the MDX file via the useMDXComponent hook.
    const MDXContent = getMDXComponent(post.body.code)

    return <section className='pt-2 md:pt-6'>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post.structuredData) }}
      ></script>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <MDXContent components={mdxComponents} />
      </article>
    </section>
    
}

export async function generateStaticParams() {
    return allBlogs.map((post) => ({
        slug: post._raw.flattenedPath,
    }))
}
