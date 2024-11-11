DROP INDEX IF EXISTS "blogs_link_unique";--> statement-breakpoint
ALTER TABLE `blogs` ALTER COLUMN "description" TO "description" text;--> statement-breakpoint
CREATE UNIQUE INDEX `blogs_link_unique` ON `blogs` (`link`);