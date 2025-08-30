import { seed } from "drizzle-seed";
import { db } from "$lib/server/db/client";
import { financeLedger } from "./schema";

async function main() {
    await seed(db, { financeLedger }, { count: 5 });
}

main();