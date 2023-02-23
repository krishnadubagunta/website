import getCameraTypes from '../../../utils/products/cameraTypes'
import getProducts from '../../../utils/products'
import Card from '../../../components/Card'
import Link from '../../../components/Link'

export default async function Photos({ params: { cameraType } }) {
  const products = await getProducts(cameraType)

  return  (<div className='my-8 mx-8'>
        <div className='w-11/12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {
            products.map((product) => <Link href={`/photography/product/${product.sys.id}`} key={product.sys.id}>
              <Card
                product={product}
              />
            </Link>)
          }
        </div>
    </div>)
}

export async function generateStaticParams() {
  const cameraTypes = await getCameraTypes()

  return cameraTypes.map((cameraType) => ({ cameraType }))
}

export const dynamicParams = true
