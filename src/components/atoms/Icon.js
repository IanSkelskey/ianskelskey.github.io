import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, siIcons, svgIcons } from "../../data/icons";
import { createElement } from "react";
import { motion } from "framer-motion";

const getTextSizeInPx = (className) => {
  const sizeMap = {
    "text-xs": 12,
    "text-sm": 14,
    "text-base": 16,
    "text-lg": 18,
    "text-xl": 20,
    "text-2xl": 24,
    "text-3xl": 30,
    "text-4xl": 36,
    "text-5xl": 48,
    "text-6xl": 60,
    "text-7xl": 72,
    "text-8xl": 96,
    "text-9xl": 128,
  };

  const foundClass = className.split(" ").find((cn) => sizeMap[cn]);
  return sizeMap[foundClass] || sizeMap["text-base"]; // Default size
};

const Icon = ({ name, className = "" }) => {
  const isFontAwesome = faIcons.hasOwnProperty(name);
  const isSimpleIcon = siIcons.hasOwnProperty(name);
  const isSVG = svgIcons.hasOwnProperty(name);

  if (!isFontAwesome && !isSimpleIcon && !isSVG) {
    console.error(`Icon "${name}" is not supported`);
    return null;
  }

  const icon = isFontAwesome
    ? faIcons[name]
    : isSimpleIcon
      ? siIcons[name]
      : svgIcons[name];

  const size = getTextSizeInPx(className);

  if (isFontAwesome) {
    return <motion.div layout><FontAwesomeIcon icon={icon} className={className} /></motion.div>;
  } else if (isSimpleIcon) {
    return <motion.div layout><SiIcon icon={icon} size={size} className={className} /></motion.div>;
  } else if (isSVG) {
    return <motion.div layout><SvgIcon icon={icon} size={size} className={className} alt={name} /></motion.div>;
  }
};

function SiIcon({ icon, size, className }) {
  return createElement(icon, { size, className });
}

function SvgIcon({ icon, size, alt, className }) {
  const SVG = icon;
  return (
    <SVG
      className={className}
      style={{ width: size, height: size }}
      alt={alt}
    />
  );
}

export default Icon;
