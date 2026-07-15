import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { sql, eq } from "drizzle-orm";
import { resumeDb, resumeTable } from "@/app/_lib/resume-db";

export async function GET() {
  const [row] = await resumeDb()
    .select()
    .from(resumeTable)
    .where(eq(resumeTable.id, 1))
    .limit(1);

  return NextResponse.json({ data: row ?? null });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session?.user) {
    return NextResponse.json({ success: false, message: "unauthorized" }, { status: 401 });
  }

  const { content } = await req.json();
  if (typeof content !== "string" || !content.trim()) {
    return NextResponse.json({ success: false, message: "content is required" }, { status: 400 });
  }

  const updatedAt = new Date();
  await resumeDb()
    .insert(resumeTable)
    .values({ id: 1, content, updatedAt })
    .onConflictDoUpdate({
      target: resumeTable.id,
      set: { content: sql`excluded.content`, updatedAt: sql`excluded."updatedAt"` },
    });

  return NextResponse.json({ success: true, data: { content, updatedAt } });
}
