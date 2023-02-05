import ContentfulApi from "../contentful"

export default async function CameraTypes() {
  const QUERY = `{
    productCollection(preview: true) {
      total
      items {
        id
        title
        description
        category
        cameraType
      }
    }
  }`

  const data = await ContentfulApi.client(QUERY, {
    reducer: ({ data, errors }) => ({  ...data, ...errors }),
    preview: true
  })

  return data
}