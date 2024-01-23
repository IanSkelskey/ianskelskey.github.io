import { aseprite, creativeCloud, framerMotion, guitar, love2d, lua, react, tailwind, vocals } from "./badges";

const professionalInterests = [
  {
    title: "Web Design",
    description:
      "I am a web designer that loves designing intuitive and effective web solutions. I specialize in front-end technologies, including React and Tailwind CSS.",
    icon: "laptopCode",
    accentColor: "#f56565",
    skills: [react, tailwind, framerMotion],
  },
  {
    title: "Game Development",
    description:
      "I'm a game developer with a passion for creating engaging and fun games. I specialize in Lua and Love2D, and am currently working on GD50: Intro to Game Development through edX and Harvard.",
    icon: "gameController",
    accentColor: "#38b2ac",
    skills: [lua, love2d, aseprite],
  },
  {
    title: "Music",
    description:
      "I'm a musician with a passion for creating music. I like combining acoustic guitar with synths. I have been playing the piano for my whole life and guitar since I was 13. I also like to sing. I go out for karaoke now and then.",
    icon: "musicNote",
    accentColor: "#9f7aea",
    skills: [guitar, vocals],
  },
  {
    title: "Art",
    description:
      "I'm a mostly self-taught artist with a passion for creating compelling designs. I am proficient with many Adobe Creative Cloud applications including Photoshop, Illustrator, and InDesign. I also have experience with Adobe After Effects and Premiere Pro.",
    icon: "paintBrush",
    accentColor: "#ed64a6",
    skills: [aseprite, creativeCloud],
  },
];

export default professionalInterests;
