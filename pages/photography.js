import getProducts from '../utils/products'
import Container from '@mui/material/Container'
import Navbar from "../components/Navbar"
import Box from '@mui/material/Box'
import Card from '../components/Card'
import Flexbox from '../components/Flexbox'
import Image from 'next/image'
import CancelIcon from '@mui/icons-material/Cancel'
import Link from 'next/link'
import Modal from 'react-modal'
import ViewportHeightComponent from '../components/ViewportHeight'
import getProduct from '../utils/products/productId'
import { Masonry } from 'masonic'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

Modal.setAppElement('#__next')

const StyledModal = styled(Modal)(() => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: 'attr(width) / attr(height)',
  height: '100vh',
  width: '100vw',
  outline: 'none',
}))

const InnerModal = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'start',
  height: '95%',
  width: '95%',
}))

const OverlayModal = ({ children, ...props}) => <StyledModal {...props}>
  <InnerModal>
    { children }
  </InnerModal>
  <div style={{ height: '100%', paddingTop: '7vh' }}>
    <Flexbox align='start' secondaryAlign='start'>
      <Link href='/' passHref shallow={true}>
        <CancelIcon />
      </Link>
    </Flexbox>
  </div>
</StyledModal>

export default function Photos({ products }) {
  const router = useRouter()
  const { query: { product: productId } } = router
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (!productId) return
    async function fetchProduct() {
      const responseData = await getProduct({ productId })
      const { product: productData } = responseData
      setProduct(productData)
    }
    fetchProduct()
  }, [setProduct, productId])

  const masonComponent = useMemo(() => <motion.div layout>
    <Masonry
      style={{
        outline: 'none',
      }}
      items={products}
      columnGutter={4}
      columnWidth={425}
      render={({data : { sys, asset, title, }}) => {
        const { url, height, width } = asset
        return <Card
            href={`/?product=${sys.id}`}
            imageUrl={url}
            height={height}
            width={width}
            title={title}
            as={`/products/${sys.id}`}
            id={sys.id}
          />
        }
      }
    />
  </motion.div>, [products])

  return  <>
    <div className='my-8'>
      <div className='flex justify-center'>
        <div className='w-11/12 rounded'>
          { masonComponent }
        </div>
      </div>
    </div>
    {
      <OverlayModal isOpen={!!productId} onRequestClose={() => router.push('/')}>
        <motion.div variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
        >
            <Image
              alt={product?.title}
              src={product?.asset?.url}
              objectFit='contain'
              layout='fill'
            />
        </motion.div>
      </OverlayModal>
    }
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
