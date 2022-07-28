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
import getProduct from '../utils/products/productId'
import { Masonry } from 'masonic'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useState, useMemo } from 'react'
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

export default async function Photos({ products }) {
  const router = useRouter()
  const { query: { product: productId } } = router
  const [product, setProduct] = useState(null)
  if (productId) {
    const responseData = await getProduct({ productId })
    const { product: productData } = responseData
    setProduct(productData)
  }

  const MasonComponent = useMemo(() => <motion.div layout>
    <Masonry
      style={{
        outline: 'none',
      }}
      items={products}
      columnGutter={8}
      columnWidth={400}
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
    <Container maxWidth='xl'>
      <Navbar />
    </Container>
    <Container maxWidth='xl'>
      <Box m={4}>
        <MasonComponent />
      </Box>
    </Container>
    {
      !productId && <OverlayModal isOpen={!!product} onRequestClose={() => router.push('/')}>
        <motion.div variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
        >
            <Image
              alt={product.title}
              src={product.asset.url}
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
