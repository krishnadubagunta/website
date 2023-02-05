import getProducts from '../../utils/products'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'

export default function Photography({ products }) {
    console.log(products)
    return <></>
}

export async function getStaticProps() {
    const data = await getProducts('digital')

    return {
      props: {
        products: data.productCollection.items
      },
      revalidate: 10,
    }
  }
  

Photography.getLayout = (page) => {
    return (<Layout>
      <Sidebar />
      { page }
    </Layout>)
}
