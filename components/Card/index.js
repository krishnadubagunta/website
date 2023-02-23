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
  } = product
  const component = <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1'>
    {
      imageUrl && <Image
        className='rounded'
        style={{ objectFit: 'cover' }}
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
    <p className="mt-4 text-base text-gray-900">{ title }</p>
  </div>
}
