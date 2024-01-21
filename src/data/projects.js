import {
  aseprite,
  firebase,
  framerMotion,
  illustrator,
  love2d,
  lua,
  openAI,
  photoshop,
  react,
  spotify,
  tailwind,
} from "./badges";

const projects = [
  {
    title: "Zelda Ocarina of Time Community Retexture",
    icon: "ocarina",
    date: "2014",
    category: "Game Mod",
    description:
      "A community-driven high resolution texture pack for The Legend of Zelda: Ocarina of Time.",
    thumbnail: "/assets/zelda-screenshot-2.png",
    skills: [photoshop],
  },
  {
    title: "Field Day",
    icon: "fieldDay",
    date: "2022",
    category: "Web App",
    description:
      "A comprehensive data collection and management tool geared towards aiding wildlife researchers and conservationists in Arizona. Dr. Heather Bateman, a biology professor at ASU, sponsors the project. The tech stack for this project includes JavaScript, React, Tailwind, Firestore, Firebase, and Framer Motion.",
    thumbnail: "/assets/field-day.png",
    skills: [react, tailwind, firebase, framerMotion, illustrator],
  },
  {
    title: "Connecticut Community Holiday Toy Drive",
    icon: "gift",
    date: "2023",
    category: "Web App",
    description:
      "A website for a local charity event that I helped organize. The website was used to collect donations and provide information about the event.",
    thumbnail: "/assets/toy-drive.png",
    skills: [react, tailwind, firebase, illustrator],
  },
  {
    title: "GD50: Intro to Game Development",
    icon: "gameController",
    date: "Current",
    category: "Game Development",
    description:
      "A course offered by Harvard University through edX. The course covers the fundamentals of game development using the Lua programming language and the LÖVE game engine.",
    thumbnail: "/assets/gd50.png",
    skills: [lua, love2d, aseprite],
  },
  {
    title: "AI Playlist Assistant",
    icon: "musicNote",
    date: "Current",
    category: "Generative AI",
    description:
      "A custom GPT that analyzes playlist contents and generates artwork and descriptions for the playlist.",
    thumbnail: "/assets/playlist-assistant.png",
    skills: [spotify, openAI],
  },
];

export default projects;
