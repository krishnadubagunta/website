import MaterialCard from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Image from 'next/image'
import CardContent from '@material-ui/core/CardContent'
import Flexbox from '../Flexbox'
import Component from './component'

export default function Card({ imageUrl, id, title, children, height, width  }) {
  return <Component>
    <MaterialCard variant='outlined'>
      <CardMedia>
        <Image
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
}
