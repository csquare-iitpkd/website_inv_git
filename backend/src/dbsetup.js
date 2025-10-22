import { db } from "./db.js";

await db.execute(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  google_sub TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE,
  name TEXT,
  picture TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

console.log("✅ Users table created successfully");

// projects table
await db.execute(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    projectName TEXT NOT NULL,
    projectHandler TEXT NOT NULL,
    image TEXT,
    requirements TEXT NOT NULL,
    peopleNeeded INTEGER NOT NULL,
    startDate TEXT NOT NULL,
    endDate TEXT NOT NULL,
    isActive INTEGER DEFAULT 1,
    ownerEmail TEXT NOT NULL
);
`);

console.log("✅ Projects table created successfully");

process.exit(0);
