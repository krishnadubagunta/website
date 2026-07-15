import { db } from "@/db";
import { resumeTable } from "@/db/schema";
import { generateResumePdf } from "@/lib/resume-pdf";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const [row] = await db
    .select()
    .from(resumeTable)
    .where(eq(resumeTable.id, 1))
    .limit(1);

  if (!row) {
    return NextResponse.json({ error: "resume not found" }, { status: 404 });
  }

  const pdf = await generateResumePdf(row.content);

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="resume.pdf"',
    },
  });
}
