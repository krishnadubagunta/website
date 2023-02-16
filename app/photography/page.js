import getProducts from '../../utils/products'
import Card from '../../components/Card'

export default async function Photos() {
  const QUERY = `{
    productCollection(preview: true, order: priority_ASC, where: {cameraType: "digital"}) {
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

  const res = await fetch('http://localhost:3000/api/contentfulapi', {
    method: 'POST',
    body: JSON.stringify({
      query: QUERY,
      preview: true
    })
  })

  const { data: {productCollection: { items: products }}} = await res.json()

  return  (<div className='my-8 h-full'>
      <div className='flex justify-center'>
        <div className='w-9/12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {
            products.map((product) => <Card
              key={product.sys.id}
              product={product}
            />)
          }
        </div>
      </div>
    </div>)
}
