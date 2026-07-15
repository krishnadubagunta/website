// One-time seed: inserts the resume content that used to live in
// app/(website)/resume/content.mdx (now retired) as row id=1 of the
// `resume` table, so the DB-backed resume page/PDF route have something to
// render immediately after the migration is applied. Safe to delete once
// it's been run once against the target Turso DB - re-running just
// overwrites row 1 with the same text.
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import { sql } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

config({ path: ".env.local" });

// Inlined rather than imported from ../db/schema.ts: this is a plain-node
// script (no TS loader configured for scripts/), and it's a one-time seed
// so a duplicated table shape here is simpler than wiring one up.
const resumeTable = sqliteTable("resume", {
  id: integer("id").primaryKey(),
  content: text("content").notNull(),
  updatedAt: integer({ mode: "timestamp" }).notNull(),
});

const CONTENT = `# Sai Krishna Dubagunta
+1 862-237-4645 | [dubagunta.saikrishna@outlook.com](mailto:dubagunta.saikrishna@outlook.com) | [LinkedIn](https://linkedin.com/in/saikrishnadubagunta) | [GitHub](https://github.com/krishnadubagunta)

## Professional Summary

Full-stack software engineer and principal consultant architect with 9+ years of experience designing and delivering scalable, high-performance systems across cloud, microservices, and AI-integrated platforms. Proven across the full stack in Golang, Rust, Zig, TypeScript, and Ruby, with deep expertise in API design, system optimization, and engineering leadership.

## Professional Experience

### HTC Global Services – Principal Consultant Architect

**Dec 2024 – Present · Indiana University**

* **Savi:** Architected the community information tool, improving response time by 93% (3s → 200ms).
* **Server Optimization:** Built a Golang API Gateway with service discovery, load balancing, and Redis caching, cutting response times from 200ms to 5ms with zero-downtime autoscaling.
* **SAAS Element:** Built a declarative microfrontend hosting solution for multi-instance client configuration, reducing compute overhead.
* **Team Leadership:** Led a distributed offshore team of 20 engineers across time zones, coordinating delivery and maintaining engineering standards.
* **Solutions & POCs:** Provided architectural solutions and built POCs, validating performance claims with benchmarks and actionable insights.

### HTC Global Services – Software Engineer L4

**Apr 2024 – Dec 2024 · Alliance Partner**

* **Premium Fund Accounts:** Modernized an internal insurance agent tool, resolving critical bugs and improving performance by 90%.
* **Management of Financial Institutions:** Designed the application architecture for managing a registry of financial institutions.

### Haven Technologies – Software Engineer II

**Sep 2022 – Aug 2023**

* **Application Aggregator:** Built a centralized authentication and application listing system with RBAC, improving access management and user experience.
* **Angular Upgrade & Design System:** Upgraded Angular v9 → v14 and transitioned to a custom component-based design system, enhancing UI consistency and performance.

### Vydia, Inc. – Product Engineer

**May 2018 – Aug 2022**

* **Artist Tiers:** Engineered a revenue-based tiering system that optimized customer service prioritization, accelerating response times for high-value clients.
* **Distribution Chain:** Designed a high-scale ingestion and XML generation pipeline, cutting developer effort by 98% and slashing distribution time-to-market.
* **Smartlinks:** Built dynamic social media landing pages, increasing artist engagement by 40% and boosting streaming conversions across platforms.
* **Profile for Artists:** Proposed and architected a scalable artist profile system that became a core feature post-acquisition, enhancing user personalization.

## Technical Skills

* **Languages:** Golang, Zig, Rust, Ruby, Python, JavaScript/TypeScript, Java
* **Frontend:** Vue, React, Angular, Next.js, Redux, TailwindCSS, Webpack, RSbuild, Micro-frontends
* **Backend:** Node.js, Express.js, Ruby on Rails, Django, Spring Boot, GraphQL, gRPC
* **Data:** PostgreSQL, Apache AGE (graph), Redis, RabbitMQ, MongoDB, GORM, TypeORM
* **DevOps:** Docker, Kubernetes, Terraform, AWS, GCP, GitHub Actions, GitLab CI/CD
* **Practices:** TDD, API Design, Microservices, Web Performance Optimization, Caching Strategies, Agile/Scrum

## Education

* **M.S. Computer Science** – New Jersey Institute of Technology, Newark, NJ
* **B.Tech. Computer Science** – Andhra University, Visakhapatnam, India

## Projects

### Katha — AI-native Reading Platform

**Purposes Ecosystem**

* Polyglot persistence: PostgreSQL, Apache AGE graph DB with hand-rolled Cypher and bitemporal edge semantics, and a file-blob store for large content.
* Two-stage AI pipeline (motif/narrative extraction → summarization) via gRPC to Go microservices running a local llama.cpp LLM.
* Compositional React reader with hierarchical ToC, multi-input navigation, content-tier toggling, and graph-stored annotations.

### Katha — Document Parser CLI

**Rust · [GitHub repository](https://github.com/krishnadubagunta/Katha)**

* Cargo workspace CLI normalizing EPUB/DOCX/PDF into a unified document model (headings, lists, tables, figures).
* CI/CD via GitHub Actions: cross-compiles release binaries for Linux/macOS/Windows and cuts GitHub releases gated on tests passing.

### katha-parsers — Document Parsing Library

**Rust · [Library crate link](https://crates.io/crates/katha-parsers)**

* Standalone Rust crate published to crates.io providing a unified Parser trait for EPUB, DOCX, and PDF formats.
* Shared HTML-cleaning pipeline converting raw format markup into semantic content blocks (headings, lists, tables, figures).
* Custom pdf_oxide integration for PDF table and embedded image extraction as base64 data URIs, beyond plain-text parsing.

### PlumCache — Key-Value Database

**[PlumCache Documentation](https://plumcache.kridworks.com/)**

* Built in Zig for low-level memory control with a namespace-supported, trie-based finite state machine.
* Plugin architecture enabling features as independently loaded modules.

### Zserve — Event Loop Static File Server

**[Zserve GitHub repository](https://github.com/krishnadubagunta/zserve)**

* Event-loop-based static file server built in Zig for high-throughput performance and minimal memory footprint.

## Achievements & Publications

* Exhibited landscape photography at Bridgeport Art Center, Chicago; featured Fujifilm photographer on Instagram.
* Contributed to a project that received national media coverage on Cheddar News.
* Writes on software engineering, career development, and technology via Personal Blog, Substack, and Medium.
`;

async function main() {
  const db = drizzle({
    connection: {
      url: process.env.TURSO_URL,
      authToken: process.env.TURSO_TOKEN,
    },
  });

  await db
    .insert(resumeTable)
    .values({ id: 1, content: CONTENT, updatedAt: new Date() })
    .onConflictDoUpdate({
      target: resumeTable.id,
      set: { content: sql`excluded.content`, updatedAt: sql`excluded."updatedAt"` },
    });

  console.log("Seeded resume table (id=1).");
}

main().catch((error) => {
  console.error("Failed to seed resume:", error);
  process.exit(1);
});
