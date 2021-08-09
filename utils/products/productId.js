import ContentfulApi from "../contentful"

export default async function SingleProduct({ productId }) {
  const QUERY = `{
    product(id: "${productId}") {
      sys {
        id
      }
      title
      description
      asset {
        title
        size
        url
        height
        width
      }
    }
  }`
  const data = await ContentfulApi.client(QUERY, {
    reducer: ({ data, errors }) => ({ ...data, errors })
  })
  return data
}
