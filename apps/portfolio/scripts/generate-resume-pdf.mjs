// Builds public/resume.pdf from app/(website)/resume/content.mdx at build
// time, so the downloadable PDF always matches the page content. Runs the
// raw MDX through @mdx-js/mdx (no kd-ui component mapping needed — we just
// want plain h1/h2/h3/p/ul/li/strong/a tags to walk), renders to static
// HTML, then lays that out into a PDF with jsPDF.
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { load } from "cheerio";
import { jsPDF } from "jspdf";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_PATH = path.join(__dirname, "../app/(website)/resume/content.mdx");
const OUT_PATH = path.join(__dirname, "../public/resume.pdf");

const MARGIN = 48;
const PAGE_WIDTH = 612; // letter, pt
const PAGE_HEIGHT = 792;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

// jsPDF's default (WinAnsi/Helvetica) encoding drops or mis-renders several
// characters this content actually uses — sanitize to safe ASCII equivalents
// rather than embedding a custom Unicode font for a handful of glyphs.
const CHAR_REPLACEMENTS = [
  [/[–—]/g, "-"], // en/em dash
  [/→/g, "->"], // right arrow
  [/[‘’]/g, "'"], // curly single quotes
  [/[“”]/g, '"'], // curly double quotes
];
const sanitize = (text) =>
  CHAR_REPLACEMENTS.reduce((acc, [pattern, replacement]) => acc.replace(pattern, replacement), text);

async function main() {
  const source = await readFile(CONTENT_PATH, "utf8");
  const { default: Content } = await evaluate(source, {
    ...runtime,
    Fragment: runtime.Fragment,
  });
  const html = renderToStaticMarkup(React.createElement(Content));
  const $ = load(html);

  const doc = new jsPDF({ unit: "pt", format: "letter" });
  let y = MARGIN;

  const ensureSpace = (needed) => {
    if (y + needed > PAGE_HEIGHT - MARGIN) {
      doc.addPage();
      y = MARGIN;
    }
  };

  // Splits an inline node's children into text/link runs (one level deep —
  // matches this resume's actual markup, no deeper nesting to handle).
  const inlineRuns = (node, bold = false) => {
    const runs = [];
    $(node)
      .contents()
      .each((_, child) => {
        if (child.type === "text") {
          const text = sanitize($(child).text());
          if (text.trim()) runs.push({ text, bold, href: undefined });
        } else if (child.tagName === "a") {
          runs.push({ text: sanitize($(child).text()), bold, href: $(child).attr("href") });
        } else if (child.tagName === "strong") {
          runs.push(...inlineRuns(child, true));
        }
      });
    return runs;
  };

  // Renders a single line of mixed text/link runs (no wrapping — used only
  // for short lines: contact info, job/project subtitle lines).
  const writeInlineLine = (runs, fontSize) => {
    ensureSpace(fontSize + 4);
    doc.setFontSize(fontSize);
    let x = MARGIN;
    for (const run of runs) {
      doc.setFont("helvetica", run.bold ? "bold" : "normal");
      const width = doc.getTextWidth(run.text);
      doc.text(run.text, x, y);
      if (run.href) {
        doc.link(x, y - fontSize * 0.8, width, fontSize, { url: run.href });
      }
      x += width;
    }
    y += fontSize + 6;
  };

  // Renders a wrapped bullet: an optional bold "label:" prefix followed by
  // word-wrapped plain text, jsPDF has no native mixed-style wrapping.
  const writeBullet = (label, text, fontSize = 10, lineHeight = 14) => {
    ensureSpace(lineHeight);
    doc.setFontSize(fontSize);
    const bulletX = MARGIN + 10;
    const textX = bulletX + 12;
    const maxWidth = MARGIN + CONTENT_WIDTH - textX;

    doc.setFont("helvetica", "normal");
    doc.text("•", bulletX, y);

    doc.setFont("helvetica", "bold");
    const labelText = label ? `${label}: ` : "";
    const labelWidth = labelText ? doc.getTextWidth(labelText) : 0;

    doc.setFont("helvetica", "normal");
    const words = text.split(" ");
    const lines = [];
    let current = "";
    let widthBudget = maxWidth - labelWidth;
    for (const word of words) {
      const test = current ? `${current} ${word}` : word;
      if (doc.getTextWidth(test) > widthBudget && current) {
        lines.push(current);
        current = word;
        widthBudget = maxWidth;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);

    if (labelText) {
      doc.setFont("helvetica", "bold");
      doc.text(labelText, textX, y);
    }
    doc.setFont("helvetica", "normal");
    doc.text(lines[0] || "", textX + labelWidth, y);
    for (let i = 1; i < lines.length; i++) {
      y += lineHeight;
      ensureSpace(lineHeight);
      doc.text(lines[i], textX, y);
    }
    y += lineHeight;
  };

  const writeParagraph = (text, fontSize = 10, lineHeight = 14) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH);
    for (const line of lines) {
      ensureSpace(lineHeight);
      doc.text(line, MARGIN, y);
      y += lineHeight;
    }
    y += 4;
  };

  const children = $("body").children().toArray();
  let sawFirstParagraph = false;

  for (const el of children) {
    const tag = el.tagName;

    if (tag === "h1") {
      ensureSpace(28);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text(sanitize($(el).text()), MARGIN, y);
      y += 28;
      continue;
    }

    if (tag === "p" && !sawFirstParagraph) {
      // The contact-info line right after the h1 — render with real links.
      sawFirstParagraph = true;
      writeInlineLine(inlineRuns(el), 10);
      y += 6;
      continue;
    }

    if (tag === "h2") {
      y += 12;
      ensureSpace(24);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      const label = sanitize($(el).text()).toUpperCase();
      doc.text(label, MARGIN, y);
      doc.setDrawColor(180);
      doc.line(MARGIN, y + 4, MARGIN + CONTENT_WIDTH, y + 4);
      y += 20;
      continue;
    }

    if (tag === "h3") {
      y += 8;
      ensureSpace(16);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(sanitize($(el).text()), MARGIN, y);
      y += 16;
      continue;
    }

    if (tag === "p") {
      // Bold subtitle lines (dates/team, or project subtitle with a link)
      // vs. plain body paragraphs (summary).
      const strongChild = $(el).children("strong").first();
      if (strongChild.length && $(el).text().trim() === strongChild.text().trim()) {
        writeInlineLine(inlineRuns(strongChild.get(0)), 10);
        y += 4;
      } else {
        writeParagraph(sanitize($(el).text()));
      }
      continue;
    }

    if (tag === "ul") {
      $(el)
        .children("li")
        .each((_, li) => {
          const strongChild = $(li).children("strong").first();
          if (strongChild.length) {
            const label = sanitize(strongChild.text()).replace(/:\s*$/, "");
            const rest = sanitize(
              $(li).clone().children("strong").remove().end().text().trim()
            );
            writeBullet(label, rest);
          } else {
            writeBullet(null, sanitize($(li).text().trim()));
          }
        });
      y += 4;
      continue;
    }
  }

  await mkdir(path.dirname(OUT_PATH), { recursive: true });
  const bytes = doc.output("arraybuffer");
  await writeFile(OUT_PATH, Buffer.from(bytes));
  console.log(`Generated ${path.relative(process.cwd(), OUT_PATH)} (${bytes.byteLength} bytes)`);
}

main().catch((error) => {
  console.error("Failed to generate resume PDF:", error);
  process.exit(1);
});
