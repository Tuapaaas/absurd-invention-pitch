// One-Sentence Absurd Invention Pitch — entry program.
// Writes the pitch to <MAKEFUN_OUTPUT_DIR>/entry.txt (or /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pitch =
  "A doormat that interviews every shoe at the door and turns away any pair without a believable alibi for where it's been.";

function fail(message: string): never {
  throw new Error(message);
}

if (pitch.length < 1 || pitch.length > 220) {
  fail(`pitch must be 1-220 characters, got ${pitch.length}`);
}
if (!pitch.trim()) {
  fail("pitch must not be blank");
}
if (pitch.trim().split(/\s+/).length < 3) {
  fail("pitch must be a sentence, not a fragment");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
console.log(`wrote entry.txt (${pitch.length} chars)`);
