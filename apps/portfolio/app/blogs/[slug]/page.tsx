import { allBlogs } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { mdxComponents } from '../../_lib/mdx-components'
import Skeleton from 'kd-ui/ui/skeleton'

export async function generateMetadata({
  params,
}: { params: { slug: string } }): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    shortTitle,
    publishedAt: publishedTime,
    summary: description,
    image,
    keywords,
    slug,
  } = post;

  return {
    metadataBase: new URL(`https://krishnadubagunta.com`),
    title,
    description,
    keywords,
    openGraph: {
      title: shortTitle,
      description,
      type: 'article',
      authors: ["Krishna Dubagunta"],
      publishedTime,
      url: `https://krishnadubagunta.com/blogs/${slug}`,
      images: [
        {
          url: image || '',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || ''],
    },
  };
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
      <article className="flex flex-col rounded-sm w-full">
        <div className='max-w-prose place-self-center'>
          <MDXContent components={mdxComponents} /> 
        </div>
      </article>
      <p className='prose text-center text-2xl md:pt-6 pt-2'>***</p>
    </section>   
}

export async function generateStaticParams() {
    return allBlogs.map((post) => ({
        slug: post._raw.flattenedPath,
    }))
}
