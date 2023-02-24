export default class ContentfulApi {
  static QUERY_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/development`
  static fetchOptions(query, { preview, revalidate = null }) {
    return {
      method: "POST",
      headers: {
        Authorization: `Bearer ${preview ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate
      },
      cache: 'force-cache'
    }
  }

  static async client(query, options = {}) {
    const { reducer } = options
    const request = await fetch(this.QUERY_ENDPOINT, this.fetchOptions(query, options))
    const data = await request.json()

    if(!reducer) return data

    return reducer(data)
  }

}
