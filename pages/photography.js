import getProducts from '../utils/products'
import Card from '../components/Card'
import { Masonry } from 'masonic'
import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function Photos({ products }) {

  const masonComponent = useMemo(() => <div>
    <Masonry
      items={products}
      columnGutter={4}
      columnWidth={425}
      render={({data : { sys, asset, title, }}) => {
        const { url, height, width } = asset
        return <motion.div >
          <Card
            href={`/products/${sys.id}`}
            imageUrl={url}
            height={height}
            width={width}
            title={title}
            id={sys.id}
          />
        </motion.div>
        }
      }
    />
  </div>, [products])
  return  <>
    <div className='my-8 h-full'>
      <div className='flex justify-center'>
        <div className='w-11/12'>
          { masonComponent }
        </div>
      </div>
    </div>
  </>
}

export async function getStaticProps() {
  const data = await getProducts()

  return {
    props: {
      products: data.productCollection.items
    },
    revalidate: 10,
  }
}
