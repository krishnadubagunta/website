DROP INDEX IF EXISTS "blogs_link_unique";--> statement-breakpoint
ALTER TABLE `blogs` ALTER COLUMN "categories" TO "categories" blob;--> statement-breakpoint
CREATE UNIQUE INDEX `blogs_link_unique` ON `blogs` (`link`);--> statement-breakpoint
ALTER TABLE `blogs` ADD `image` text;