import { drizzle } from 'drizzle-orm/libsql';
import * as dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

console.log(process.env.DATABASE_URL!)

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL!
}});

export { db };