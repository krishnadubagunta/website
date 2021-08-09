import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Image from 'next/image'
import Navbar from "../../components/Navbar"

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

  return <>
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
  </>
}

export async function getStaticProps({ params: { product: productId } }) {
  const data = await (await fetch(`${process.env.URI}/api/products/${productId}`)).json()
  if(!data || !data.product) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      ...data
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const data = await (await fetch(`${process.env.URI}/api/products`)).json()

  return {
    paths: data.productCollection.items.map(({ sys: { id } }) => ({
      params: {
        product: id,
      }
    })),
    fallback: true,
  }
}