import Markdown from "../../../../components/Markdown"
import SingleProduct from "../../../../utils/products/productId"
import ProductIds from "../../../../utils/products/productIds"
import Image from 'next/image'

export default async function Photo({ params: { slug } }) {
    const { product: { asset, description, title } } = await SingleProduct({ productId: slug })

    return <div className="px-4 my-4 flex flex-col items-center">
        <div className="w-10/12 items-start">
            <Image
                src={asset.url}
                width={asset.width / 1.2}
                height={asset.height / 1.2}
            />
            <p className="my-4 text-lg">{title}</p>
            <Markdown>{ description }</Markdown>
        </div>
    </div>
}

export async function generateStaticParams() {
    const productIds = await ProductIds()

    return productIds.map((productId) => ({ slug: productId }))
}