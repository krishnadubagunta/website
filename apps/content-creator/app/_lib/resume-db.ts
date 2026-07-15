// Talks directly to the same Turso DB apps/portfolio reads from - portfolio
// owns the `resume` table's migrations (apps/portfolio/db/schema.ts), this
// is just a matching table shape for content-creator's read/write side.
import { drizzle } from "drizzle-orm/libsql";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const resumeTable = sqliteTable("resume", {
  id: integer("id").primaryKey(),
  content: text("content").notNull(),
  updatedAt: integer({ mode: "timestamp" }).notNull(),
});

let _db: ReturnType<typeof drizzle> | undefined;

export function resumeDb() {
  if (!_db) {
    _db = drizzle({
      connection: {
        url: process.env.TURSO_URL!,
        authToken: process.env.TURSO_TOKEN!,
      },
    });
  }
  return _db;
}
