import {
  faAws,
  faGitAlt,
  faGithub,
  faGithubAlt,
  faJava,
  faJs,
  faLinkedin,
  faNodeJs,
  faPython,
  faReact,
  faSquareFontAwesome,
  faVuejs,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faBars,
  faBriefcase,
  faBug,
  faCode,
  faEnvelope,
  faFile,
  faGamepad,
  faGears,
  faGraduationCap,
  faGuitar,
  faHeart,
  faLaptopCode,
  faLayerGroup,
  faLocation,
  faMicrophone,
  faMusic,
  faPaintBrush,
  faPaperPlane,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  SiAdobecreativecloud,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobexd,
  SiAseprite,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiLua,
  SiOpenai,
  SiPrettier,
  SiSimpleicons,
  SiSpotify,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import FormspreeSvg from "../assets/FormspreeSvg";
import ExpressSvg from "../assets/ExpressSvg";
import MySqlSvg from "../assets/MySqlSvg";
import FieldDaySvg from "../assets/FieldDaySvg";
import OcarinaSvg from "../assets/OcarinaSvg";

const faIcons = {
  user: faUser,
  resume: faFile,
  projects: faBriefcase,
  contact: faAddressBook,
  phone: faPhone,
  email: faEnvelope,
  location: faLocation,
  github: faGithub,
  linkedin: faLinkedin,
  youtube: faYoutube,
  laptopCode: faLaptopCode,
  gameController: faGamepad,
  musicNote: faMusic,
  paintBrush: faPaintBrush,
  react: faReact,
  fontAwesome: faSquareFontAwesome,
  githubPages: faGithubAlt,
  heart: faHeart,
  javascript: faJs,
  java: faJava,
  code: faCode,
  python: faPython,
  vue: faVuejs,
  aws: faAws,
  git: faGitAlt,
  node: faNodeJs,
  gradCap: faGraduationCap,
  gears: faGears,
  hamburger: faBars,
  guitar: faGuitar,
  microphone: faMicrophone,
  stack: faLayerGroup,
  paperPlane: faPaperPlane,
  bug: faBug
};

const siIcons = {
  tailwind: SiTailwindcss,
  prettier: SiPrettier,
  simpleIcons: SiSimpleicons,
  lua: SiLua,
  firebase: SiFirebase,
  figma: SiFigma,
  creativeCloud: SiAdobecreativecloud,
  xd: SiAdobexd,
  illustrator: SiAdobeillustrator,
  photoshop: SiAdobephotoshop,
  framerMotion: SiFramer,
  aseprite: SiAseprite,
  inDesign: SiAdobeindesign,
  openAI: SiOpenai,
  spotify: SiSpotify
};

const svgIcons = {
  formspree: FormspreeSvg,
  express: ExpressSvg,
  mySql: MySqlSvg,
  fieldDay: FieldDaySvg,
  ocarina: OcarinaSvg
};

export { faIcons, siIcons, svgIcons };