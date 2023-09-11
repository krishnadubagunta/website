import ContentfulApi from "./contentful"

export default async function Product({ productId }: { productId: string}) {
  const QUERY = `query {
    product(id: "${productId}") {
      sys {
        id
      }
      title
      description
      asset {
        sys {
          id
        }
        title
        size
        url(transform: { format: WEBP, quality: 100 })
        height
        width
      }
    }
  }`
  const data = await ContentfulApi.client(QUERY, {
    reducer: ({ data, errors }:any) => ({ ...data, errors }),
    preview: false
  })

  return data
}