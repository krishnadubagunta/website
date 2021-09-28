import MaterialCard from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Image from 'next/image'
import CardContent from '@material-ui/core/CardContent'
import Flexbox from '../Flexbox'
import Component from './component'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Card({ imageUrl, id, title, children, height, width, linkTo  }) {
  return <Link href={linkTo} passHref>
    <Component>
      <motion.div variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }} 
        transition={{ duration: 2 }}
        initial='hidden'
        animate='visible'
      >
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
      </motion.div>
    </Component>
  </Link>
}
