// src/db.js
import { createClient } from "@libsql/client";
import dotenv from "dotenv";
dotenv.config();

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
});

// Helper: run a query
export async function run(sql, params = []) {
  const res = await db.execute(sql, params);
  return res;
}
