export default async function ContentfulApi({ body }, res) {
    const { query, preview } = JSON.parse(body)
    const QUERY_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/development`

    const request = await fetch(QUERY_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${preview ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
    })
    const data = await request.json()

    res.json(data)
}