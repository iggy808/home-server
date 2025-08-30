CREATE TABLE `financeLedger` (
	`id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`amount` real NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
