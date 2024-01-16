import { faAws, faGitAlt, faGithub, faGithubAlt, faJava, faJs, faLinkedin, faNodeJs, faPython, faReact, faSquareFontAwesome, faVuejs, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faBriefcase, faCode, faEnvelope, faFile, faGamepad, faGears, faGraduationCap, faHeart, faLaptopCode, faLocation, faMusic, faPaintBrush, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiFigma, SiFirebase, SiLua, SiPrettier, SiSimpleicons, SiTailwindcss } from "@icons-pack/react-simple-icons";
import FormspreeSvg from "../../assets/FormspreeSvg";
import FramerMotionSvg from "../../assets/FramerMotionSvg";
import ExpressSvg from "../../assets/ExpressSvg";
import MySqlSvg from "../../assets/MySqlSvg";

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
};

const siIcons = {
  tailwind: SiTailwindcss,
  prettier: SiPrettier,
  simpleIcons: SiSimpleicons,
  lua: SiLua,
  firebase: SiFirebase,
  figma: SiFigma,
  xd: SiAdobexd,
  illustrator: SiAdobeillustrator,
  photoshop: SiAdobephotoshop
};

const svgIcons = {
  formspree: FormspreeSvg,
  framerMotion: FramerMotionSvg,
  express: ExpressSvg,
  mySql: MySqlSvg,
};

export { faIcons, siIcons, svgIcons };