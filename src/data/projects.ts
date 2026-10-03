import type { DemoProject } from "../types";

// Array order controls the gallery order. Add a project here to add its card.
export const projects: readonly DemoProject[] = [
  {
    id: "collab-code",
    title: "Collab Code",
    category: "Application",
    description:
      "Code together in the browser. Built for classrooms, tutoring, and pair programming.",
    featured: true,
    thumbnail: "thumbnails/collab-code.svg",
    primaryAction: { label: "Open demo", href: "https://ianskelskey.github.io/collab-code/" },
    supportingActions: [
      { label: "View source", href: "https://github.com/IanSkelskey/collab-code" },
    ],
  },
  {
    id: "game-feed",
    title: "game-feed",
    category: "Template",
    description: "Your gaming history, published as a website and JSON feed.",
    thumbnail: "thumbnails/game-feed.webp",
    primaryAction: {
      label: "Explore example",
      href: "https://ianskelskey.github.io/game-feed/",
    },
    supportingActions: [
      { label: "Use template", href: "https://github.com/IanSkelskey/game-feed/generate" },
      { label: "JSON feed", href: "https://ianskelskey.github.io/game-feed/data/games.json" },
    ],
  },
  {
    id: "react-ts-starter",
    title: "react-ts-starter",
    category: "Template",
    description:
      "A React + TypeScript starting point with styling, accessibility, and deployment ready.",
    thumbnail: "thumbnails/react-ts-starter.webp",
    primaryAction: {
      label: "Explore starter",
      href: "https://ianskelskey.github.io/react-ts-starter/",
    },
    supportingActions: [
      { label: "Use template", href: "https://github.com/IanSkelskey/react-ts-starter/generate" },
    ],
  },
];
