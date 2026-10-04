/**
 * Refreshes `src/data/assetPacks.json` from the itch.io server-side API.
 *
 *   ITCH_IO_API_KEY=… npm run itch:refresh
 *
 * The key grants full account access, so it only ever runs here — locally or
 * in the deploy workflow from a repository secret — and never reaches the
 * browser. Only display fields are written out; the API also returns view,
 * download, and purchase counts, which must not end up in the public bundle.
 *
 * Fails soft: with no key, or if itch.io is unreachable, it warns and leaves
 * the committed snapshot in place so a deploy never blocks on itch.io.
 *
 * https://itch.io/docs/api/serverside
 */
import { writeFile } from "node:fs/promises";
import type { AssetPack } from "../src/types/index.ts";

const OUTPUT = new URL("../src/data/assetPacks.json", import.meta.url);

/** The subset of a `/profile/games` entry this script reads. */
type ItchGame = {
  id: number;
  title: string;
  short_text?: string;
  url: string;
  cover_url?: string | null;
  min_price: number;
  classification: string;
  published: boolean;
  published_at?: string;
};

const warn = (message: string) =>
  // `::warning::` surfaces as an annotation on the GitHub Actions run.
  console.warn(process.env.GITHUB_ACTIONS ? `::warning::${message}` : `warning: ${message}`);

const fetchGames = async (key: string): Promise<ItchGame[]> => {
  const res = await fetch("https://api.itch.io/profile/games", {
    headers: { Authorization: `Bearer ${key}` },
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`itch.io responded with ${res.status}`);
  const body = (await res.json()) as { games?: ItchGame[] };
  if (!Array.isArray(body.games)) throw new Error("response had no games array");
  return body.games;
};

const key = process.env.ITCH_IO_API_KEY;
if (!key) {
  warn("ITCH_IO_API_KEY is not set; keeping the committed asset pack snapshot.");
  process.exit(0);
}

let games: ItchGame[];
try {
  games = await fetchGames(key);
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  warn(`Could not refresh asset packs (${reason}); keeping the committed snapshot.`);
  process.exit(0);
}

const packs: AssetPack[] = games
  .filter((game) => game.classification === "assets" && game.published)
  .filter((game) => {
    if (game.cover_url) return true;
    warn(`Skipping "${game.title}": it has no cover image on itch.io.`);
    return false;
  })
  // Newest first, matching how itch.io orders a creator page.
  .sort((a, b) => (b.published_at ?? "").localeCompare(a.published_at ?? ""))
  .map((game) => ({
    id: game.id,
    title: game.title,
    description: game.short_text ?? "",
    cover: game.cover_url as string,
    url: game.url,
    minPrice: game.min_price,
  }));

await writeFile(OUTPUT, `${JSON.stringify(packs, null, 2)}\n`);
console.log(`Wrote ${packs.length} asset packs to src/data/assetPacks.json.`);
