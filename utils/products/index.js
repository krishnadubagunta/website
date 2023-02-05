import ContentfulApi from "../contentful"

export default async function Products(cameraType) {
  const QUERY = `{
    productCollection(preview: true, where: { category: "${cameraType}" }, order: priority_ASC) {
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
          url
          height
          width
        }
      }
    }
  }`

  const data = await ContentfulApi.client(QUERY, {
    reducer: ({ data, errors }) => ({  ...data, ...errors }),
    preview: true
  })

  console.log("DDAAATTTAA", data)

  return data
}