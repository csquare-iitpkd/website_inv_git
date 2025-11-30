// src/auth.js
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { db } from "./db.js";

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error('FATAL: missing required environment variable JWT_SECRET');
  process.exit(1);
}

export async function verifyGoogleIdToken(idToken) {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID
  });

  const payload = ticket.getPayload();
  return payload;
}

export async function upsertUserFromGoogle(payload) {
  // fields we care about:
  const { sub, email, name, picture } = payload;


  const sql = `
    INSERT INTO users (google_sub, email, name, picture, updated_at)
    VALUES (?, ?, ?, ?, datetime('now'))
    ON CONFLICT(google_sub) DO UPDATE SET
      email=excluded.email,
      name=excluded.name,
      picture=excluded.picture,
      updated_at=datetime('now')
    ;
  `;
  await db.execute(sql, [sub, email, name, picture]);

  const rowRes = await db.execute("SELECT * FROM users WHERE google_sub = ? LIMIT 1", [sub]);
  const user = rowRes.rows?.[0] ?? rowRes[0]; // tolerant access
  return user;
}

export function createSessionToken(user) {
  const payload = {
    uid: user.id,
    email: user.email,
    name: user.name
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
  return token;
}
