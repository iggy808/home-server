import { seed } from "drizzle-seed";
import { db } from "$lib/server/db/client";
import { v4 as uuid } from "uuid";
import { financeLedgerItems, financeLedgerTypes } from "./schema";

async function main() {
    let financeLedgerTypeRecords = await seedFinanceLedgerTypes();
    await seed(db, { financeLedgerItems }, { count: 5 }).refine((f) => ({
        financeLedgerItems: {
            columns: {
                id: f.uuid(),
                typeId: f.valuesFromArray({
                    values: financeLedgerTypeRecords.map((type) => type.id)
                }),
                description: f.string(),
                amount: f.number({minValue: 0.01, maxValue: 300.00})
            }
        }
    }));
};

async function seedFinanceLedgerTypes() {
    let existingTypes = await db.select().from(financeLedgerCategory);
    if (existingTypes.length > 0) {
        return existingTypes;
    }

    let financeLedgerTypeRecords = [
        {
            id: uuid(),
            code: "GRO",
            name: "GROCERIES",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: uuid(),
            code: "TKO",
            name: "TAKE-OUT",
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ]

    return await db
        .insert(financeLedgerCategory)
        .values(financeLedgerTypeRecords)
        .returning();
};

main();