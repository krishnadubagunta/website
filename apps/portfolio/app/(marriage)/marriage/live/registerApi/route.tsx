import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request: Request) {
  const body = await request.json();

  const buf = Buffer.from(body.liveLink, "utf-8").toString("base64url");
  const response = await fetch(`${process.env.KV_REST_API_URL}/set/liveLink`, {
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
    },
    body: buf,
    method: "POST",
  });
  const res = await response.json();
  return NextResponse.json({
    success: res.result === "OK",
  });
}

export async function GET(_: Request) {
  const response = await fetch(`${process.env.KV_REST_API_URL}/get/liveLink`, {
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
    },
  });
  const r = await response.json();
  console.log(r);
  return NextResponse.json({
    success: true,
    response: JSON.stringify(r),
  });
}
