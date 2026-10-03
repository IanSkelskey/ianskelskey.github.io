# Contributing

Notes for working on the demo hub. For what the site is and what's on it, start with [README.md](README.md).

## Setup

Requires Node 22 (see [`.nvmrc`](.nvmrc)).

```bash
npm install
npm run dev
```

## Scripts

| Script                   | Purpose                                                            |
| ------------------------ | ------------------------------------------------------------------ |
| `npm run dev`            | Start the Vite dev server.                                         |
| `npm run build`          | Type-check and produce a production build.                         |
| `npm run preview`        | Preview the production build locally. **Audit this, not `dev`.**   |
| `npm run lint`           | Run ESLint.                                                        |
| `npm run typecheck`      | Run `tsc -b --noEmit`.                                             |
| `npm run format`         | Write Prettier formatting.                                         |
| `npm run prettier-check` | Verify Prettier formatting (used in CI).                           |
| `npm run verify`         | Prettier-check → lint → typecheck → build. Must pass before merge. |

## Adding a project

1. **Add a thumbnail** to `public/thumbnails/`. Cards crop it to 16:9 with `object-fit: cover`, so use a 16:9 image (1280 × 720 or larger) and keep the subject centered. WebP keeps it small.
2. **Add an entry** to the `projects` array in [`src/data/projects.ts`](src/data/projects.ts). Array order is gallery order.

   ```ts
   {
     id: "my-project",
     title: "My Project",
     category: "Application", // or "Template"
     description: "One sentence on what it does and who it's for.",
     thumbnail: "thumbnails/my-project.webp",
     primaryAction: { label: "Open demo", href: "https://ianskelskey.github.io/my-project/" },
     supportingActions: [
       { label: "View source", href: "https://github.com/IanSkelskey/my-project" },
     ],
   }
   ```

3. **Optionally set `featured: true`.** A featured project spans the full row in a horizontal layout above the two-column grid. Feature one project at a time.
4. **Update the README's project table** and regenerate the social preview (see [Images](#images)), since both list the projects.

The whole card links to `primaryAction`; `supportingActions` render as smaller links beside it (typically "View source", "Use template", or a data feed).

## Project structure

```
src/
├── App.tsx                    # Route declarations + Suspense boundary
├── main.tsx                   # Entry: StrictMode + ErrorBoundary + BrowserRouter
├── index.css                  # Tailwind @theme tokens + base styles + a11y globals
├── components/
│   ├── ErrorBoundary.tsx      # Route-aware error boundary
│   ├── RouteFallback.tsx      # <Suspense> fallback
│   ├── layout/
│   │   └── Layout.tsx         # Header/Main/Footer shell
│   └── projects/
│       ├── ProjectCard.tsx    # One card; `featured` switches to the wide layout
│       ├── ProjectCard.css    # Stretched link, hover and focus states
│       └── ProjectGallery.tsx # Card grid
├── config/
│   └── env.ts                 # Build-time constants (version, base path)
├── data/
│   └── projects.ts            # The gallery — add projects here
├── hooks/
│   └── useDocumentTitle.ts    # Per-route <title>
├── pages/
│   ├── HomePage.tsx           # The hub
│   └── NotFound.tsx
└── types/
    └── index.ts               # All shared types
```

## Conventions

Full conventions are documented in [.github/copilot-instructions.md](.github/copilot-instructions.md). The highlights:

- All colors use semantic tokens. Never use raw palette classes (`text-red-600`). The palette is shared with the portfolio at [ianskelskey.com](https://ianskelskey.com/), and switches with `prefers-color-scheme`.
- All env reads go through `src/config/env.ts`.
- Props types are local to each component file; no shared prop-type modules.
- State machines use typed string unions, not booleans.
- Run `npm run verify` before committing.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes `dist/` to GitHub Pages on every push to `main` (repo **Settings → Pages → Source: GitHub Actions**). Because this is the user site, it is served from the domain root and builds with `BASE_PATH=/`.

Deep links survive a hard refresh via the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect: a `404.html` generated at build time by [`vite.config.ts`](vite.config.ts) bounces unknown paths to `index.html`, and an inline script there restores the URL before React Router boots.

## Images

- [`public/og-image.png`](public/og-image.png) is the 1200 × 630 social preview referenced from the Open Graph and Twitter tags in [`index.html`](index.html).
- [`public/hero.webp`](public/hero.webp) is the banner at the top of the README.

Both were made with my OG image generator using its project layout: dark theme, dot grid, accent `#99b77b`. The social preview lists the projects in its meta row, so regenerate it when the project list changes.

## Auditing performance

Run Lighthouse against `npm run preview` (port 4173), never `npm run dev`. The dev server ships unminified modules, the HMR client, and react-refresh — roughly 5 MB over 22 requests, versus ~82 kB over 6 for the real build. Auditing `dev` measures Vite's development ergonomics, not your site:

```bash
npm run build && npm run preview   # then audit http://localhost:4173/
```

## Before opening a pull request

`npm run verify` must pass — it runs the same prettier-check → lint → typecheck → build chain as CI, so a green local run means a green badge.
