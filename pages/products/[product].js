import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Image from 'next/image'
import Navbar from "../../components/Navbar"
import Typography from "@material-ui/core/Typography"
import getProducts from '../../utils/products'
import getProduct from '../../utils/products/productId'
import Flexbox from '../../components/Flexbox'

const ViewportHeightComponent = styled('div')(({ height }) => ({
  position: 'relative',
  marginTop: '16px',
  width: '100%',
  height,
  maxHeight: '85vh'
}))

const ItalicBody = styled(Typography)(() => ({
  fontStyle: 'italic'
}))

export default function Product({ product }) {
  if(!product) return <></>

  const { title, description, asset: { url, height } } = product

  return <>
    <Container maxWidth='xl'>
      <Navbar />
    </Container>
    <Container maxWidth='lg'>
      <Box>
        <ViewportHeightComponent height={height}>
          <Image
            alt={title}
            src={url}
            objectFit='contain'
            layout='fill'
          />
        </ViewportHeightComponent>
        <Flexbox secondaryAlign='center'>
          <ItalicBody variant='body2' >
            { description }
          </ItalicBody>
        </Flexbox>
      </Box>
    </Container>
  </>
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