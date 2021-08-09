export default class ContentfulApi {
  static QUERY_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/development`
  static fetchOptions(query, preview) {
    return {
      method: "POST",
      headers: {
        Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    }
  }

  static async client(query, options = {}) {
    const { reducer } = options
    const request = await fetch(this.QUERY_ENDPOINT, this.fetchOptions(query, options.preview))
    const data = await request.json()

    if(!reducer) return data

    return reducer(data)
  }

}
