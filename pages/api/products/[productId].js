import ContentfulApi from "../../../utils/contentful"

export default async function SingleProduct({ query: { productId } }, res) {
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
      }
    }
  }`
  const data = await ContentfulApi.client(QUERY, {
    reducer: ({ data, errors }) => ({ ...data, errors })
  })
  return res.json(data)
}
