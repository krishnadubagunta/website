import Home from '../screens/Home'

export default function Index({ products }) {
  return <Home products={products} />
}

export async function getStaticProps() {
  const data = await (await fetch(`${process.env.URI}/api/products`)).json()

  return {
    props: {
      products: data.productCollection.items
    },
    revalidate: 10,
  }
}
