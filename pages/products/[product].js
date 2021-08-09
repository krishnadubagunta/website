import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Image from 'next/image'
import Navbar from "../../components/Navbar"
import getProducts from '../../utils/products'
import getProduct from '../../utils/products/productId'

const ViewportHeightComponent = styled('div')(({ height }) => ({
  position: 'relative',
  marginTop: '32px',
  width: '100%',
  height,
  maxHeight: '85vh'
}))

export default function Product({ product }) {
  if(!product) return <></>

  const { title, asset: { url, height } } = product

  return <Container maxWidth='lg'>
    <Navbar />
    <Box mx={4}>
      <ViewportHeightComponent height={height}>
        <Image
          alt={title}
          src={url}
          objectFit='contain'
          layout='fill'
        />
      </ViewportHeightComponent>
    </Box>
  </Container>
}

export async function getStaticProps({ params: { product: productId } }) {
  const { product } = await getProduct({ productId })
  if(!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      product
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const data = await getProducts()

  return {
    paths: data.productCollection.items.map(({ sys: { id } }) => ({
      params: {
        product: id,
      }
    })),
    fallback: true,
  }
}