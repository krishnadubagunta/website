import ContentfulApi from "./contentful"

export default async function Products(cameraType: string[], options: any) {
    const whereQuery = `${!!cameraType.length ? `,where: {OR: [${cameraType.map(camera => `{cameraType: \"${camera}\"}`)}]}` : "" }`

    const QUERY = `{
        productCollection(preview: true, order: priority_ASC${whereQuery}) {
          total
          items {
            id
            sys {
              id
            }
            title
            priority
            description
            category
            asset {
              sys {
                id
              }
              title
              size
              url(transform: { format: WEBP, quality: 20 })
              height
              width
            }
          }
        }
      }`
    const { productCollection: { items }} = await ContentfulApi.client(QUERY, {
    reducer: ({ data, errors }: any) => ({  ...data, ...errors }),
    preview: true,
    revalidate: 10,
    ...options
    })

    return (items as Array<{}>).sort((a: any,b: any) => a.priority - b.priority)
}