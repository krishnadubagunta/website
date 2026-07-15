import { text, sqliteTable, integer, blob,  } from 'drizzle-orm/sqlite-core'


export const blogTable = sqliteTable('blogs', {
    id: integer("id").primaryKey(),
    link: text("link").notNull().unique(),
    title: text("title").notNull(),
    description: text("description"),
    image: text("image"),
    content: text("content"),
    pubDate: integer({ mode: 'timestamp' }).$defaultFn(() => new Date()),
    categories: blob({ mode: 'json' }).$type<string[]>(),
    creator: text("creator").notNull(),
    summary: text("summary"),
    lastUpdated: integer({ mode: 'timestamp' }),
    enclosure: blob({ mode: 'json' }).$type<{ url: string, length: string, type: string }>()
})

// Single active row (id 1) holding the current resume as MDX-ish markdown
// text, edited from content-creator and rendered live by the resume page
// and the on-demand PDF route - no build/redeploy needed to pick up edits.
export const resumeTable = sqliteTable('resume', {
    id: integer("id").primaryKey(),
    content: text("content").notNull(),
    updatedAt: integer({ mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
})
