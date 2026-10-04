import type { AssetPack, DemoProject } from "../types";
import snapshot from "./assetPacks.json";

/*
 * `assetPacks.json` is generated — refresh it with `npm run itch:refresh`
 * (see scripts/fetch-itch-assets.ts), and the deploy workflow refreshes it on
 * every build. Edit display tweaks here instead of in the JSON.
 */
export const assetPacks: readonly AssetPack[] = snapshot;

/**
 * Shorter titles for the hub, keyed by itch.io game id. itch titles carry
 * version numbers and "(Free)" suffixes that the card already conveys.
 */
const TITLE_OVERRIDES: Record<number, string> = {
  4613936: "Tiny Pixel Social Buttons",
  4076414: "Space 8 – PICO-8 Space Tilesheet",
  3862373: "Fancy Trainers",
  3824819: "Mad Professor",
};

const formatPrice = (cents: number) => (cents === 0 ? "Free" : `From $${(cents / 100).toFixed(2)}`);

/*
 * The page itch.io's own "Download Now" button opens: name-your-price with a
 * "No thanks, just take me to the downloads" skip for free packs, checkout for
 * paid ones. Not a documented URL, so if it ever 404s, point the primary
 * action back at `pack.url`.
 */
const purchaseUrl = (pack: AssetPack) => `${pack.url.replace(/\/$/, "")}/purchase`;

/*
 * itch.io cannot be framed (X-Frame-Options / frame-ancestors), so the
 * download flow opens in a small window instead, the way itch's own buy button
 * (static.itch.io/api.js) does: `?popup=1` is its compact layout, built for a
 * 680px-wide window. Taller than itch's 400px default, so the price field,
 * skip link, and file list fit with little scrolling.
 */
const purchasePopup = (pack: AssetPack) => ({
  href: `${purchaseUrl(pack)}?popup=1`,
  width: 680,
  height: 640,
});

/**
 * The pack shown full-width above the grid, with its itch.io page banner in
 * place of the cover. The API has no banner field, so the image is saved under
 * `public/thumbnails/` — copy it from the `#header` image on the pack's itch
 * page (2400 × 1000). Set to `null` to show every pack in the grid.
 */
const FEATURED_PACK: { id: number; banner: string } | null = {
  id: 3824819, // Mad Professor
  banner: "thumbnails/mad-professor-banner.png",
};

const toCard = (pack: AssetPack): DemoProject => {
  const featured = pack.id === FEATURED_PACK?.id;
  return {
    id: `itch-${pack.id}`,
    title: TITLE_OVERRIDES[pack.id] ?? pack.title,
    category: "Asset pack",
    description: pack.description,
    featured,
    thumbnail: featured ? FEATURED_PACK.banner : pack.cover,
    thumbnailShape: featured ? "banner" : "cover",
    price: formatPrice(pack.minPrice),
    primaryAction: {
      label: pack.minPrice === 0 ? "Download now" : "Buy now",
      href: purchaseUrl(pack),
      popup: purchasePopup(pack),
    },
    supportingActions: [{ label: "View on itch.io", href: pack.url }],
  };
};

/**
 * Asset packs shaped for `ProjectCard`, so they share the hub's card design.
 * The featured pack leads; the rest keep the snapshot's newest-first order.
 */
export const assetPackCards: readonly DemoProject[] = assetPacks
  .map(toCard)
  .sort((a, b) => Number(b.featured) - Number(a.featured));
