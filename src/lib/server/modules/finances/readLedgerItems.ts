import { db } from "$lib/server/db/client"
import { financeLedgerItems, financeLedgerTypes } from "$lib/server/db/schema"
import { eq } from "drizzle-orm";

export async function readLedgerItems() {
    let ledgerItems = (await db
        .select()
        .from(financeLedgerItems)
        .leftJoin(financeLedgerTypes, eq(financeLedgerTypes.id, financeLedgerItems.typeId)))
        .map((item) => ({
            description: item.financeLedgerItems.description,
            createdAt: item.financeLedgerItems.createdAt,
            amount: item.financeLedgerItems.amount,
            ledgerTypeName: item.financeLedgerTypes!.name
        }));
    
    return ledgerItems;
}