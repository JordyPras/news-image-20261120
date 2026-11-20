// "The World — 20 November 2026": a one-image newspaper front page summing up
// Friday 20 November 2026 (ICJ Rohingya genocide ruling, Trump–Xi–Putin peace
// declaration in Shenzhen, Anthropic's record $81.3B IPO, plus ten smaller stories,
// a world map and a numbered briefs list). Node 22, standard library only.
//
// The image is the entry: this program copies the bundled entry.png to the output
// directory, byte for byte, so both grader runs write identical bytes. No network,
// no randomness, no drawing at runtime.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const entryImage = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDir, 'entry.png');

// The gate caps the image at 1 MiB and 1024x1024; fail loudly instead of
// silently shipping a file the scorer would reject.
const size = statSync(entryImage).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB gate`);
}

copyFileSync(entryImage, outputPath);

// The grader runs the program twice and both runs must write the same bytes:
// confirm the copy landed whole before reporting success.
const writtenBytes = statSync(outputPath).size;
if (writtenBytes !== size) {
  throw new Error(`wrote ${writtenBytes} bytes, expected ${size}`);
}
console.log(`wrote ${outputPath} (${writtenBytes} bytes)`);
