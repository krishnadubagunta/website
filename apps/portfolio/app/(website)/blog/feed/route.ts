import { db } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await db.query.blogTable.findMany({
        orderBy: ({ pubDate, lastUpdated }, { desc }) => desc(pubDate) && desc(lastUpdated)
    })

    return NextResponse.json(res)
}