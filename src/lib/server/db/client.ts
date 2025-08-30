import { drizzle } from 'drizzle-orm/libsql';
export { db };

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL!
}});