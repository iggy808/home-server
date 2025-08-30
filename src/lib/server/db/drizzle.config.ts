import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

export default defineConfig({
    dialect: "sqlite",
    schema: "./src/lib/server/db/schema.ts",
    dbCredentials: {
        url: process.env.DATABASE_URL!
    },
    out: "./src/lib/server/db/migrations"
});