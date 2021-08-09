import ContentfulApi from "../../../utils/contentful"

export default async function Posts(req, res) {
  const QUERY = `{
    productCollection(preview: true, order: priority_ASC) {
      total
      items {
        id
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
    }
  }`

  const data = await ContentfulApi.client(QUERY, {
    reducer: ({ data, errors }) => ({  ...data, ...errors }),
    preview: true
  })

  return res.json({
    ...data
  })
}