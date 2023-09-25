import ContentfulApi from "./contentful"

export default async function ProductIds() {
    const QUERY = `{
        productCollection(preview: true) {
          items {
            sys {
              id
            }
          }
        }
      }`
    
      const { productCollection: { items }} = await ContentfulApi.client(QUERY, {
        reducer: ({ data, errors }: any) => ({  ...data, ...errors }),
        preview: true
      })

    return items.map(({ sys: { id }}: { sys: { id: string } }) => id)
}