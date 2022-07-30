import MaterialCard from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Image from 'next/image'
import CardContent from '@mui/material/CardContent'
import Flexbox from '../Flexbox'
import Link from 'next/link'

const WithLink = ({ as, href, children }) => <Link as={as} href={href} passHref scroll={false}>
  { children }
</Link>

export default function Card({ imageUrl, id, title, children, height, width, href, as }) {
  const component = <div>
    {
      imageUrl && <Image
        className='rounded'
        style={{ aspectRatio: 'attr(width) / attr(height)' }}
        width={width}
        height={height}
        src={imageUrl}
        alt={title}
        layout='responsive'
      />
    }
    {
      children && <div className='flex flex-col divide-y divide-gray-300 divide-solid children-padding'>
        { children }
      </div>
    }
  </div>
  return <div className={`shadow rounded ${ imageUrl ? 'p-0' : 'p-2'}`}>
    {
      href ? <WithLink as={as} href={href}>
        { component }
      </WithLink> : component
    }
  </div>
}
