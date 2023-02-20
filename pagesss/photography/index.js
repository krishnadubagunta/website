import getProducts from '../../utils/products'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'

export default function Photos({ products }) {
  return  (<div className='my-8 h-full'>
      <div className='flex justify-center'>
        <div className='w-11/12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {
            products.map((product) => <Card
              key={product.sys.id}
              imageUrl={product.asset.url}
              title={product.title}
              width={product.asset.width}
              height={product.asset.height}
              description={product.description}
            />)
          }
        </div>
      </div>
    </div>)
}

export async function getStaticProps() {
  const QUERY = `{
    productCollection(preview: true, order: priority_ASC) {
      total
      items {
        id
        sys {
          id
        }
        title
        description
        category
        cameraType
        asset {
          title
          size
          url(transform: { format: WEBP })
          height
          width
        }
      }
    }
  }`

  const data = await fetch('/api/contentfulapi', {
    method: 'POST',
    body: JSON.stringify({
      query: QUERY,
      preview: false
    })
  })

  return {
    props: {
      products: data.productCollection.items
    },
    revalidate: 10,
  }
}
