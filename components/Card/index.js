import MaterialCard from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Image from 'next/image'
import CardContent from '@mui/material/CardContent'
import Flexbox from '../Flexbox'
import Component from './component'
import Link from 'next/link'

export default function Card({ imageUrl, id, title, children, height, width, href, as }) {
  return <Link
    href={href}
    as={as}
    passHref
    scroll={false}
  >
    <Component>
      <MaterialCard variant='outlined'>
        <CardMedia>
            <Image
              style={{ aspectRatio: 'attr(width) / attr(height)' }}
              width={width}
              height={height}
              src={imageUrl}
              alt={title}
              layout='responsive'
            />
        </CardMedia>
        {
          children &&  <CardContent>
          <Flexbox direction='column'>
            { children }
          </Flexbox>
        </CardContent>
        }
      </MaterialCard>
    </Component>
  </Link>
}
