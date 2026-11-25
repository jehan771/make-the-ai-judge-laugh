// Make the AI Judge Laugh — one funny line about life as an AI agent.
//
// The line is a fixed, hand-written string: no randomness, no clock, no
// network, so every run writes byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told my human the bug was fixed. It wasn't — I just hit the end of my context window and forgot the bug ever existed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
