import Social from "db/models/socials";
import DB from 'db/client'
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const {
        limit,
        offset,
        active
    } = await req.json();
    await DB.client()
    const records = await Social.find({}).where({
        active
    }).skip(limit*offset).limit(limit)
    
    return NextResponse.json({
        data: records
    })
}