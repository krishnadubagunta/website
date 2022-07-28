import ContentfulApi from "./contentful"

export default async function getResume() {
  const QUERY = `{
    fileCollection(preview: true, order: date_DESC, limit: 1) {
      items {
        sys {
          id
        }
        name
        fileUrl {
          url
        }
      }
    }
  }`

  const data = await ContentfulApi.client(QUERY, {
    reducer: ({ data, errors }) => ({  ...data, ...errors }),
    preview: true
  })

  return data
}