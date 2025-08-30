import { db } from "$lib/server/db/client"
import { financeLedger } from "$lib/server/db/schema"

export async function readLedgerItems() {
    return db.select().from(financeLedger);
}