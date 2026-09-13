# Screenshots

Every file here is a generated placeholder. Replace each one with a real capture
(keep the same base name, switch the extension to `.png`, and update the `src`
in the page that uses it).

| File | Size | Where it appears |
| --- | --- | --- |
| `web-home` | 1600 x 1000 | Home hero, `index.astro` |
| `web-library` | 1600 x 1000 | Clients — web |
| `web-detail` | 1600 x 1000 | Clients — web, Features — playback |
| `web-livetv` | 1600 x 1000 | Clients — web, Features — live TV |
| `web-music` | 1600 x 1000 | Clients — web |
| `web-admin` | 1600 x 1000 | Clients — server |
| `phone-home` | 800 x 1700 | Clients — phone |
| `phone-detail` | 800 x 1700 | spare |
| `phone-nowplaying` | 800 x 1700 | Clients — phone |
| `tv-home` | 1920 x 1080 | Clients — Android TV |
| `tv-guide` | 1920 x 1080 | Clients — Android TV |
| `tv-player` | 1920 x 1080 | Clients — Android TV |
| `auto-browse` | 1400 x 840 | Clients — Android Auto |
| `auto-nowplaying` | 1400 x 840 | Clients — Android Auto |

## Capture notes

- **Web** — a 1600 x 1000 browser viewport keeps the aspect ratio the frame expects.
  Use a library with real artwork; empty shelves photograph badly.
- **Phone** — Pixel 8 emulator or device, portrait. Crop the status bar if the clock
  shows something distracting.
- **Android TV** — Google TV 1080p emulator. Capture with a control focused so the
  Vora focus ring is visible; that is the thing worth showing.
- **Android Auto** — the Desktop Head Unit (`desktop-head-unit` from the Android Auto
  SDK) renders the browse tree on a desktop without a car. Enable Android Auto
  Developer settings, then "Unknown sources", or the sideloaded build will not appear.

Run `node tools/make-placeholders.mjs` to regenerate the placeholders if you need them back.
