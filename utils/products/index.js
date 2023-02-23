import ContentfulApi from "../contentful"

export default async function Products(cameraType, options) {
    const QUERY = `{
        productCollection(preview: true, order: priority_ASC, where: {
            OR: [
                {cameraType: "${cameraType}"},
            ]
        }) {
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
        reducer: ({ data, errors }) => ({  ...data, ...errors }),
        preview: true,
        ...options
      })

    return items
}