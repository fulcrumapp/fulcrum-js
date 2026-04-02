/**
 * Post-build fixup for ESM output paths.
 *
 * TypeScript emits literal import specifiers, so paths written in src/ as
 * `../generated/dist/…` are correct for the CJS output at dist/ but land one
 * level too shallow when the ESM build writes files to dist/esm/.
 *
 * This script rewrites every .js and .d.ts file under dist/esm/, replacing
 * `../generated/dist/` with `../../generated/dist/esm/` so that all generated
 * imports resolve correctly and point at the ESM build of the generated client.
 */

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const OLD = '../generated/dist/';
const NEW = '../../generated/dist/esm/';

const files = readdirSync('dist/esm').filter((f) => f.endsWith('.js') || f.endsWith('.d.ts'));

let changed = 0;

for (const name of files) {
  const path = `dist/esm/${name}`;
  const original = readFileSync(path, 'utf8');
  const fixed = original.replaceAll(OLD, NEW);

  if (fixed !== original) {
    writeFileSync(path, fixed, 'utf8');
    console.log(`patched: ${path}`);
    changed++;
  }
}

if (changed === 0) {
  console.log('fix-esm-paths: nothing to patch');
}
