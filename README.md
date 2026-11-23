# YOHED COFFEE: concept website

A one-page spec site for YOHED COFFEE, the family-owned Ethiopian coffee house at 4160 University Ave in City Heights, San Diego. It's built with Next.js (App Router, static export), TypeScript, Tailwind CSS v4 and Framer Motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out (uses the /yohed-coffee-website base path)
```

## Edit content

Every word, hour, link and menu item lives in `src/content/site.ts`. Strings use the shape `{ en, am? }` so an Amharic toggle can be added later. Search the file for `TODO` to find everything that still needs the owner to confirm it: the Amharic spelling of "Yohed", the year they opened, hours, bean regions, ceremonies, the full menu, bag sizes, the online order link and the map pin.

- **Prices:** set `showPrices = true` once every item has a real `price`.
- **Demo mode:** `isDemo = true` adds `noindex, nofollow` and the "Concept site · not affiliated" footer line. Set it to `false` for a real launch.

## Image slots

The site looks finished with zero photos because every slot has an illustrated SVG fallback. To add a photo, put it in `public/images/` and set `ready: true` on that slot in `photos` in `site.ts`. Paths go through `asset()` (`src/lib/asset.ts`), so they get the base path on GitHub Pages.

| Slot | File | Aspect ratio |
|---|---|---|
| Hero pour | `hero-pour.jpg` | 4:5 |
| Beans bag | `beans-bag.jpg` | 4:5 |
| Counter | `space-counter.jpg` | 4:3 |
| Art on the walls | `space-art.jpg` | 3:4 |
| Patio | `space-patio.jpg` | 16:10 (shown 16:5 on desktop) |
| Coffee being poured | `space-pour.jpg` | 1:1 |
| Beans | `space-beans.jpg` | 1:1 |
| Open Graph | `public/og.png` | 1200×630 (still to add) |

## World map

The map in the origin section is generated from Natural Earth data (via `world-atlas`). To regenerate `public/world-map.svg` and `src/content/world-map.json`, run:

```bash
node scripts/build-world-map.mjs
```

## Deploys

Each push to `main` runs `.github/workflows/deploy.yml`, which builds the static export and publishes `./out` to GitHub Pages at `https://<user>.github.io/yohed-coffee-website/`. In production, `next.config.ts` sets `basePath`/`assetPrefix` to `/yohed-coffee-website`. In dev it's empty.
