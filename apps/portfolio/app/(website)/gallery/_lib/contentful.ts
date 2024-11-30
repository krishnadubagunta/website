import { NextFetchEvent } from "next/server"

export default class ContentfulApi {
    static QUERY_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/development`
    static fetchOptions(query: string, { preview, revalidate = null }: any): {} {
      return {
        method: "POST",
        headers: {
          Authorization: `Bearer ${preview ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query }),
        revalidate
      }
    }
  
    static async client(query: string, options = {}) {
      const { reducer }: any = options
      const request = await fetch(this.QUERY_ENDPOINT, this.fetchOptions(query, options))
      const data = await request.json()
  
      if(!reducer) return data
  
      return reducer(data)
    }
  
  }