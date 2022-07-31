import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Image from 'next/image'
import Typography from "@mui/material/Typography"
import getProducts from '../../utils/products'
import getProduct from '../../utils/products/productId'
import Flexbox from '../../components/Flexbox'
import ViewportHeightComponent from '../../components/ViewportHeight'

const ItalicBody = styled(Typography)(() => ({
  fontStyle: 'italic'
}))

export default function Product({ product }) {
  if(!product) return <></>

  const { title, description, asset: { url, height } } = product

  return <Container maxWidth='lg'>
    <Box>
      <ViewportHeightComponent height={height}>
        <Image
          alt={title}
          src={url}
          objectFit='contain'
          layout='fill'
        />
      </ViewportHeightComponent>
      <Box>
        <Flexbox secondaryAlign='center'>
          <ItalicBody variant='body2' >
            { description }
          </ItalicBody>
        </Flexbox>
      </Box>
    </Box>
  </Container>
}

export async function getStaticProps({ params: { product: productId } }) {
  const { product } = await getProduct({ productId })

  if(!product) {
    return {
      redirect: {
        destination: '/photography',
        permanent: true,
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
  const { productCollection } = await getProducts()

  return {
    paths: productCollection.items.map(({ sys: { id } }) => ({
      params: {
        product: id,
      }
    })),
    fallback: true,
  }
}