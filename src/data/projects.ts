import type { DemoProject } from "../types";

// Array order controls the gallery order. Add a project here to add its card.
export const projects: readonly DemoProject[] = [
  {
    id: "collab-code",
    title: "Collab Code",
    category: "Application",
    description: "Collaborative coding rooms for classrooms, tutoring, and pair programming.",
    featured: true,
    primaryAction: { label: "Open demo", href: "https://ianskelskey.github.io/collab-code/" },
    supportingActions: [
      { label: "View source", href: "https://github.com/IanSkelskey/collab-code" },
    ],
  },
  {
    id: "game-feed",
    title: "game-feed",
    category: "Template",
    description:
      "Publish your Steam and RetroAchievements gaming history as a browsable website and JSON feed.",
    primaryAction: {
      label: "Explore example",
      href: "https://ianskelskey.github.io/my-game-feed/",
    },
    supportingActions: [
      { label: "Use template", href: "https://github.com/IanSkelskey/game-feed/generate" },
      {
        label: "View JSON feed",
        href: "https://ianskelskey.github.io/my-game-feed/data/games.json",
      },
    ],
  },
  {
    id: "react-ts-starter",
    title: "react-ts-starter",
    category: "Template",
    description:
      "A React + TypeScript starting point with styling, accessibility, and GitHub Pages deployment configured.",
    primaryAction: {
      label: "Explore starter",
      href: "https://ianskelskey.github.io/react-ts-starter/",
    },
    supportingActions: [
      { label: "Use template", href: "https://github.com/IanSkelskey/react-ts-starter/generate" },
    ],
  },
];
