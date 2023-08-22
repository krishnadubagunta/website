import uniq from "lodash/uniq"
import ContentfulApi from "./contentful"

export default async function CameraTypes(): Promise<string[]> {
  const QUERY = `{
    productCollection(preview: true) {
      total
      items {
        id
        category
        cameraType
      }
    }
  }`

  const { productCollection: { items }} = await ContentfulApi.client(QUERY, {
    reducer: ({ data, errors }: any) => ({  ...data, ...errors }),
    preview: true
  })

  return uniq(items.map(({ cameraType }: { cameraType: string }) => cameraType))
}