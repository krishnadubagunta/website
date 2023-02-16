import Image from 'next/image'
import getProducts from '../../utils/products'
import getProduct from '../../utils/products/productId'
import Flexbox from '../../components/Flexbox'
import ViewportHeightComponent from '../../components/ViewportHeight'

export default function Product({ product }) {
  if(!product) return <></>

  const { title, description, asset: { url, height } } = product

  return <div>
    <div>
      <ViewportHeightComponent height={height}>
        <Image
          alt={title}
          src={url}
          objectFit='contain'
          layout='fill'
        />
      </ViewportHeightComponent>
      <div>
        <Flexbox secondaryAlign='center'>
          <p>
            { description }
          </p>
        </Flexbox>
      </div>
    </div>
  </div>
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