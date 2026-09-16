# vora-site

The public project site for [Vora](https://github.com/axufuris/VoraMediaServer), served at
**https://getvora.net** from GitHub Pages.

Static Astro. No framework components, no Tailwind — plain CSS custom properties that mirror the
Vora client's token palette, so the site and the app look like the same product.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## Structure

```
src/
  layouts/Base.astro          head, fonts, nav + footer, copy-button script
  components/
    Nav.astro                 sticky header
    Footer.astro              link columns + license/trademark line
    Feature.astro             icon card used across the feature grids
    Shot.astro                screenshot in a browser / phone / TV frame
    PlatformSwitch.astro      CSS-only Web/Phone/TV tabs for one screen
    Code.astro                code block with a copy button
  data/screenshots.json       generated — pixel dimensions for every shot
  pages/
    index.astro               the app: what it does, on what, with pictures
    features.astro            the full app feature tour
    apps.astro                web / Android phone / Android TV / Android Auto
    server.astro              administration, plugins, ops, architecture
    install.astro             docker compose, tags, env vars, GPU, Unraid
    404.astro
  styles/global.css           all tokens and component styles
screenshots-src/              source PNGs, by platform folder (tracked)
public/screenshots/           generated WebP, by platform (web/phone/tv/admin)
tools/build-screenshots.mjs   PNG -> WebP + dimensions manifest
```

The landing page is deliberately about the **app**. Server administration and
deployment live behind their own links (`/server`, `/install`) so a first-time
visitor sees what Vora looks like before they see what it takes to run.

## Screenshots

Drop new captures into `screenshots-src/<Platform>/<Some Name>.png` — the folder
names are `Web`, `Android Phone`, `Android TV` and `Server Admin` — then:

```bash
npm run screenshots
```

That writes `public/screenshots/<web|phone|tv|admin>/<kebab-name>.webp` at
quality 82 and regenerates `src/data/screenshots.json` with each image's real
pixel dimensions, which `Shot.astro` uses for width/height so nothing shifts as
the page loads. The last run took 35 MB of PNG down to 4.8 MB of WebP.

Reference a shot by its key, without extension:

```astro
<Shot src="web/live-tv-guide" url="vora.local/live" alt="..." caption="..." />
<Shot src="phone/home" frame="phone" alt="..." />
<Shot src="tv/home" frame="tv" alt="..." />
```

A phone capture that is wider than it is tall automatically gets a landscape
phone frame, so rotated screenshots do not need special handling.

## Deployment

`.github/workflows/deploy.yml` builds with `withastro/action` and publishes to GitHub Pages on every
push to `main`.

One-time setup in the repository settings:

1. **Settings → Pages → Build and deployment → Source:** *GitHub Actions*.
2. **Settings → Pages → Custom domain:** `getvora.net`, then tick **Enforce HTTPS** once the
   certificate is issued (it can take a few minutes).

### DNS for getvora.net

At the registrar, point the apex at GitHub Pages and `www` at the Pages host:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `axufuris.github.io` |

`public/CNAME` is committed so the custom domain survives every deploy — do not delete it.

## Before launch

- [ ] Replace the placeholder screenshots (`public/screenshots/README.md` lists every one).
- [ ] Confirm the GHCR image is public and `ghcr.io/axufuris/vora-media-server:latest` exists.
- [ ] Confirm `github.com/axufuris/Vora.Android` is public, or drop the footer link.
- [ ] Sanity-check the feature copy against the current README.

## License

Site content and code: same AGPL-3.0 terms as Vora. The Vora name and logo are trademarks of
Andreas Xufuris — see the [trademark policy](https://github.com/axufuris/VoraMediaServer/blob/main/TRADEMARK.md).
