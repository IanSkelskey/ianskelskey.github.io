import {
  aseprite,
  firebase,
  framerMotion,
  illustrator,
  java,
  javascript,
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
    path: "/projects/ocarina",
    icon: "ocarina",
    date: "2014",
    category: "Game Development",
    description:
      "A community-driven high resolution texture pack for The Legend of Zelda: Ocarina of Time.",
    thumbnail: "/assets/zelda-screenshot-2.png",
    skills: [photoshop],
    featured: false,
  },
  {
    title: "Field Day",
    path: "/projects/fieldday",
    subtitle: "Wildlife Research Data Management Tool",
    icon: "fieldDay",
    date: "2022",
    github: "https://github.com/Field-Day-2022",
    pwaUrl: "https://asu-field-day-pwa.web.app/",
    webUiUrl: "https://asu-field-day-webui.web.app/",
    category: "Web App",
    pageBlurb: "Field Day is my capstone project for my undergraduate degree at ASU. I was a member of a five person team that worked on the project. There were two components to this project: a PWA for mobile data collection in the field, and a data management tool designed for larger screens. My contributions include designing the UI, implementing the desktop UI using React and Tailwind, and connecting the backend to the desktop data management tool.",
    description:
      "A comprehensive data collection and management tool geared towards aiding wildlife researchers and conservationists in Arizona. Dr. Heather Bateman, a biology professor at ASU, sponsors the project. The tech stack for this project includes JavaScript, React, Tailwind, Firestore, Firebase, and Framer Motion.",
    thumbnail: "/assets/lizard.jpg",
    skills: [javascript, react, tailwind, firebase, framerMotion],
    featured: true,
  },
  {
    title: "Connecticut Community Holiday Toy Drive",
    path: "/projects/toydrive",
    icon: "gift",
    date: "2023",
    category: "Web App",
    description:
      "A website for a local charity event that I helped organize. The website was used to collect donations and provide information about the event.",
    thumbnail: "/assets/toy-drive.png",
    skills: [react, tailwind, firebase, illustrator],
    featured: true,
  },
  {
    title: "GD50: Intro to Game Development",
    path: "/projects/gd50",
    icon: "gameController",
    date: "Current",
    category: "Game Development",
    description:
      "A course offered by Harvard University through edX. The course covers the fundamentals of game development using the Lua programming language and the LÖVE game engine.",
    thumbnail: "/assets/gd50.png",
    skills: [lua, love2d, aseprite],
    featured: true,
  },
  {
    title: "AI Playlist Assistant",
    path: "/projects/aiPlaylistAssistant",
    subtitle: "A Custom GPT",
    icon: "recordVinyl",
    date: "Current",
    category: "Generative AI",
    pageBlurb: "A pet project of mine that I've been working on in my free time. The goal of this project is to create a custom GPT that can analyze a playlist and generate artwork and descriptions for the playlist.",
    description:
      "A custom GPT that analyzes playlist contents and generates artwork and descriptions for the playlist.",
    thumbnail: "/assets/playlist-assistant.png",
    skills: [spotify, openAI],
    featured: true,
  },
  {
    title: "Masks of Malik Minecraft Mod",
    path: "/projects/masksOfMalik",
    category: "Game Development",
    date: "2023",
    description: "A mod for Minecraft made for the band Masks of Malik. Contains a custom music disc with the band's music. And some paintings of the logo and a cat.",
    thumbnail: "/assets/masks-of-malik.png",
    skills: [java, aseprite],
  }
];

export default projects;