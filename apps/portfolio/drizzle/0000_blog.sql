CREATE TABLE `blogs` (
	`id` integer PRIMARY KEY NOT NULL,
	`link` text NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`content` text,
	`pubDate` integer,
	`categories` blob DEFAULT '[]',
	`creator` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `blogs_link_unique` ON `blogs` (`link`);