import { relations } from "drizzle-orm";
import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";
import { v4 as uuid } from "uuid";
export { financeLedgerItems, financeLedgerTypes };

const timestamp = {
    createdAt: integer("createdAt", { mode: "timestamp" })
        .notNull()
        .$defaultFn(() => new Date()),
    updatedAt: integer("updatedAt", { mode: "timestamp" })
        .notNull()
        .$defaultFn(() => new Date())
}

const financeLedgerItems = sqliteTable("financeLedgerItems", {
    id: text("id")
        .primaryKey()
        .notNull()
        .$defaultFn(() => uuid()),
    typeId: text("typeId")
        .notNull(),
    description: text("description")
        .notNull(),
    amount: real("amount")
        .notNull(),
    ...timestamp
});

const financeLedgerTypes = sqliteTable("financeLedgerTypes", {
    id: text("id")
        .primaryKey()
        .notNull()
        .$defaultFn(() => uuid()),
    code: text("code")
        .notNull(),
    name: text("name")
        .notNull(),
    ...timestamp
});

const financeLedgerRelations = relations(financeLedgerTypes, ({ many }) => ({
    financeLedgerItems: many(financeLedgerItems)
}));