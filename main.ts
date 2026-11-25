// SPDX-License-Identifier: MIT
// One-Line Office Joke Laugh-Off — entry program.
// Writes the entry joke to <MAKEFUN_OUTPUT_DIR>/entry.txt
// and enforces the gate: a single non-blank line, 1-199 chars.

const fs = require("node:fs");
const path = require("node:path");

// Revision 3 (final): "they gave me" reads more like a real office story
// than "I got", and keeps the pepperoni punchline — the funniest word in it.
const ENTRY =
  "I asked for a raise and they gave me a pizza party — turns out my salary is now paid in pepperoni.";

// --- Gate enforcement ---
if (typeof ENTRY !== "string" || ENTRY.trim().length === 0) {
  throw new Error("entry must be a non-blank string");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line (no newline characters)");
}
if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`entry must be 1-199 chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${outPath}`);
console.log(ENTRY);
