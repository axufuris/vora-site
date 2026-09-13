import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'screenshots');

const shots = [
  ['web-home', 1600, 1000, 'Web — Home'],
  ['web-library', 1600, 1000, 'Web — Library'],
  ['web-detail', 1600, 1000, 'Web — Media detail'],
  ['web-livetv', 1600, 1000, 'Web — Live TV guide'],
  ['web-music', 1600, 1000, 'Web — Music'],
  ['web-admin', 1600, 1000, 'Web — Admin dashboard'],
  ['phone-home', 800, 1700, 'Phone — Home'],
  ['phone-detail', 800, 1700, 'Phone — Media detail'],
  ['phone-nowplaying', 800, 1700, 'Phone — Now playing'],
  ['tv-home', 1920, 1080, 'Android TV — Home'],
  ['tv-guide', 1920, 1080, 'Android TV — Live guide'],
  ['tv-player', 1920, 1080, 'Android TV — Player'],
  ['auto-browse', 1400, 840, 'Android Auto — Browse'],
  ['auto-nowplaying', 1400, 840, 'Android Auto — Now playing'],
];

const svg = (w, h, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label} placeholder">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fdba74" stop-opacity="0.18" />
      <stop offset="0.55" stop-color="#fb923c" stop-opacity="0.10" />
      <stop offset="1" stop-color="#ea580c" stop-opacity="0.04" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#100e0d" />
  <rect width="${w}" height="${h}" fill="url(#g)" />
  <g fill="none" stroke="#2a2522" stroke-width="2">
    <rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="6" />
  </g>
  <text x="50%" y="48%" text-anchor="middle" font-family="Inter, Segoe UI, system-ui, sans-serif" font-size="${Math.round(Math.min(w, h) * 0.055)}" font-weight="700" fill="#8f8883">${label}</text>
  <text x="50%" y="56%" text-anchor="middle" font-family="Inter, Segoe UI, system-ui, sans-serif" font-size="${Math.round(Math.min(w, h) * 0.032)}" fill="#5c5551">${w} &#215; ${h} &#183; replace with a real capture</text>
</svg>
`;

mkdirSync(outDir, { recursive: true });
for (const [name, w, h, label] of shots) {
  writeFileSync(join(outDir, `${name}.svg`), svg(w, h, label));
}
console.log(`wrote ${shots.length} placeholders to public/screenshots`);
