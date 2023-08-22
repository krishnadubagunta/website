import DB from "db/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const json = await req.json()
    await DB.client()
    console.log("------")
    console.log("Here's the response")
    console.log("------")
    console.log(json)
    console.log(await req.formData())
    return NextResponse.json({
        success: true,
        data: []
    })
}