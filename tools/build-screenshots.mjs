import { mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcRoot = join(root, 'screenshots-src');
const outRoot = join(root, 'public', 'screenshots');

const folders = {
  Web: 'web',
  'Android Phone': 'phone',
  'Android TV': 'tv',
  'Server Admin': 'admin',
};

const slug = (name) =>
  name
    .replace(/\.png$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const sizes = {};
let count = 0;
let before = 0;
let after = 0;

for (const [srcName, outName] of Object.entries(folders)) {
  const srcDir = join(srcRoot, srcName);
  const outDir = join(outRoot, outName);
  mkdirSync(outDir, { recursive: true });

  for (const file of readdirSync(srcDir).filter((f) => /\.png$/i.test(f))) {
    const src = join(srcDir, file);
    const key = `${outName}/${slug(file)}`;
    const out = join(outDir, `${slug(file)}.webp`);
    const info = await sharp(src).webp({ quality: 82, effort: 5 }).toFile(out);
    sizes[key] = { w: info.width, h: info.height };
    before += statSync(src).size;
    after += statSync(out).size;
    count += 1;
  }
}

const ordered = Object.fromEntries(Object.entries(sizes).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(join(root, 'src', 'data', 'screenshots.json'), `${JSON.stringify(ordered, null, 2)}\n`);

const mb = (n) => `${(n / 1048576).toFixed(1)} MB`;
console.log(`${count} screenshots: ${mb(before)} PNG -> ${mb(after)} WebP`);
