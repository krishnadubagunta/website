import ContentfulApi from "../contentful"

export default async function SingleProduct({ productId }) {
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
    reducer: ({ data, errors }) => ({ ...data, errors }),
    preview: false
  })
  return data
}
