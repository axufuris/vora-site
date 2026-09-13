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
  layouts/Base.astro        head, fonts, nav + footer, copy-button script
  components/
    Nav.astro               sticky header
    Footer.astro            link columns + license/trademark line
    Feature.astro           icon card used across the feature grids
    Screenshot.astro        browser / phone / TV / car frames
    Code.astro              code block with a copy button
  pages/
    index.astro             hero, feature grid, surfaces, compose teaser
    features.astro          the deep feature tour
    clients.astro           server, web, phone, TV, Auto
    install.astro           docker compose, tags, env vars, GPU, Unraid
    404.astro
  styles/global.css         all tokens and component styles
public/
  screenshots/              placeholders — see public/screenshots/README.md
  CNAME                     getvora.net
tools/make-placeholders.mjs regenerates the placeholder screenshots
```

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
