import Image from 'next/image'
import Link from 'next/link'
import Markdown from 'react-markdown'

const WithLink = ({ as, href, children }) => <Link as={as} href={href} passHref scroll={false}>
  { children }
</Link>

WithLink.displayName = 'WithLink'

export default function Card({ product, id, href, as }) {
  const {
    asset: {
      url: imageUrl,
      height,
      width
    },
    title,
    description
  } = product
  const component = <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
    {
      imageUrl && <Image
        className='rounded'
        style={{  objectFit: 'cover' }}
        width={width}
        height={height}
        src={imageUrl}
        alt={title}
      />
    }
  </div>

  return <div className='group'>
    {
      href ? <WithLink as={as} href={href}>
        { component }
      </WithLink> : component
    }
    <h3 className="mt-4 text-base text-gray-900">{ title }</h3>
    <Markdown className="text-sm text-gray-500">
      { description }
    </Markdown>
  </div>
}
