import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema'

config({ path: '.env.local' }); // or .env.local

export const db = drizzle({
  schema,
  connection: {
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
}});
