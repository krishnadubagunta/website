import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: '.env.local' })

export default defineConfig({
  dialect: "turso",
  schema: "./db/schema.ts",
  dbCredentials: {
    url: process.env.TURSO_URL!,
    authToken: process.env.TURSO_TOKEN!,
  }
});