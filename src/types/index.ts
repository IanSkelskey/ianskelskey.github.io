/**
 * All shared types live in this file.
 *
 * Keep domain types here rather than creating per-domain files — a single
 * location is easier to grep, cross-reference, and enforce discriminated
 * unions across.
 */

export type ProjectLink = { label: string; href: string };

export type DemoProject = {
  id: string;
  title: string;
  category: "Application" | "Template" | "Asset pack";
  description: string;
  featured?: boolean;
  /** A path under `public/`, or an absolute URL for remote images. */
  thumbnail: string;
  /**
   * `wide` (default) crops to 16:9. `cover` keeps itch.io's 315:250 cover
   * ratio and `banner` its 12:5 page banner, so that art is shown whole rather
   * than cropped. A featured `banner` card puts the banner across the top.
   */
  thumbnailShape?: "wide" | "cover" | "banner";
  /** Short price label shown beside the category, e.g. "Free". */
  price?: string;
  primaryAction: ProjectLink;
  supportingActions: readonly ProjectLink[];
};

/**
 * An itch.io asset pack, as written to `src/data/assetPacks.json` by
 * `scripts/fetch-itch-assets.ts`. Display fields only.
 */
export type AssetPack = {
  id: number;
  title: string;
  description: string;
  /** Cover image on itch.io's CDN. */
  cover: string;
  /** The pack's itch.io page. */
  url: string;
  /** Minimum price in cents; 0 means free (or pay what you want). */
  minPrice: number;
};
