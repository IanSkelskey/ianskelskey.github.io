/**
 * Build-time configuration. All `VITE_*` env vars are inlined by Vite.
 * Add new entries here rather than reading `import.meta.env` across the app.
 */
export const APP_VERSION = "1.0.0";

/**
 * Vite's public base path — `/` for this user site, both locally and on GitHub
 * Pages. Always ends with a slash, so it concatenates directly with an asset
 * path (`${BASE_PATH}pixel-portrait.png`).
 */
export const BASE_PATH = import.meta.env.BASE_URL;
