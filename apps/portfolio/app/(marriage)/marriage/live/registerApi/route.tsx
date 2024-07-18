import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const response = await fetch(`${process.env.KV_REST_API_URL}/set/liveLink`, {
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
    },
    body: body.liveLink,
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

  return NextResponse.json({
    success: true,
    response: JSON.stringify(r),
  });
}
