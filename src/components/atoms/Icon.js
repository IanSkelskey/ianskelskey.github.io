import { faAws, faGitAlt, faGithub, faGithubAlt, faJava, faJs, faLinkedin, faNodeJs, faPython, faReact, faSquareFontAwesome, faVuejs, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faBriefcase, faCode, faEnvelope, faFile, faGamepad, faGears, faGraduationCap, faHeart, faLaptopCode, faLocation, faMusic, faPaintBrush, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiFirebase, SiLua, SiPrettier, SiSimpleicons, SiTailwindcss } from "@icons-pack/react-simple-icons";
import { createElement } from "react";
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
};

const svgIcons = {
  formspree: FormspreeSvg,
  framerMotion: FramerMotionSvg,
  express: ExpressSvg,
  mySql: MySqlSvg,
};

// Function to translate Tailwind text size classes into numeric values
const getTextSizeInPx = (className) => {
  const sizeMap = {
    'text-xs': 12,
    'text-sm': 14,
    'text-base': 16,
    'text-lg': 18,
    'text-xl': 20,
    'text-2xl': 24,
    'text-3xl': 30,
    'text-4xl': 36,
    'text-5xl': 48,
    'text-6xl': 60,
    'text-7xl': 72,
    'text-8xl': 96,
    'text-9xl': 128,
  };
  const foundClass = className.split(' ').find(cn => sizeMap[cn]);
  return sizeMap[foundClass] || sizeMap['text-base']; // Default size
};

// A single icon component for FontAwesome Icons, Simple Icons, and SVG Icons
const Icon = ({ name, className = '' }) => {
  const isFontAwesome = faIcons.hasOwnProperty(name);
  const isSimpleIcon = siIcons.hasOwnProperty(name);
  const isSVG = svgIcons.hasOwnProperty(name);

  const icon = isFontAwesome? faIcons[name] : isSimpleIcon? siIcons[name] : isSVG? svgIcons[name] : null;

  if (!icon) {
    console.error(`Icon "${name}" does not exist.`);
    return null; // Or some default icon
  }
  const size = getTextSizeInPx(className);
  if (isFontAwesome) {
    return <FontAwesomeIcon icon={icon} className={className} />;
  } else if (isSimpleIcon) {

    return createElement(icon, { size, className });
  } else if (isSVG) {
    const SvgIcon = icon;
    return <SvgIcon className={className} style={{ width: size, height: size }} alt={name} />;
  } else {
    console.error(`Icon "${name}" is not supported`);
    return null;
  }
};

export default Icon;