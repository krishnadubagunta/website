import Home from '../screens/Home'
import getProducts from '../utils/products'

export default function Index({ products }) {
  return <Home products={products} />
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
