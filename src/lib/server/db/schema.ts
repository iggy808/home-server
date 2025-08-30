import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";
import { v4 as uuid } from "uuid";
export { financeLedger };

const timestamp = {
    createdAt: integer("createdAt", { mode: "timestamp" })
        .notNull()
        .$defaultFn(() => new Date()),
    updatedAt: integer("updatedAt", { mode: "timestamp" })
        .notNull()
        .$defaultFn(() => new Date())
}

const financeLedger = sqliteTable("financeLedger", {
    id: text("id")
        .primaryKey()
        .notNull()
        .$defaultFn(() => uuid()),
    description: text("description")
        .notNull(),
    amount: real("amount")
        .notNull(),
    ...timestamp
});