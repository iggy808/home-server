ALTER TABLE `financeLedger` RENAME TO `financeLedgerItems`;--> statement-breakpoint
CREATE TABLE `financeLedgerTypes` (
	`id` text PRIMARY KEY NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE `financeLedgerItems` ADD `typeId` text NOT NULL;