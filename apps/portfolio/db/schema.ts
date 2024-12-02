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
