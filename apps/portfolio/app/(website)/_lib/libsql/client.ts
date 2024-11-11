import { createClient } from "@libsql/client";

export const turso = createClient({
  url: process.env.TURSO_URL as string,
  authToken: process.env.TURSO_TOKEN as string,
});