import * as schema from "./schema";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

type Database = ReturnType<typeof drizzle<typeof schema>>;

let pool: Pool | null = null;
let db: Database | null = null;

if (process.env.DATABASE_URL) {
  try {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    db = drizzle(pool, {
      schema,
    });
  } catch (error) {
    console.error("Failed to initialize database connection:", error);
  }
}

export { db };

export const getDb = (): Database => {
  if (!db) {
    throw new Error("Database not available");
  }
  return db;
};
