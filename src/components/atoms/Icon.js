import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, siIcons, svgIcons } from "../data/icons";
import { createElement } from "react";

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

const Icon = ({ name, className = '' }) => {
  const isFontAwesome = faIcons.hasOwnProperty(name);
  const isSimpleIcon = siIcons.hasOwnProperty(name);
  const isSVG = svgIcons.hasOwnProperty(name);

  const icon = isFontAwesome
    ? faIcons[name]
    : isSimpleIcon
      ? siIcons[name]
      : isSVG
        ? svgIcons[name]
        : null;

  if (!icon) {
    console.error(`Icon "${name}" does not exist.`);
    return null;
  }
  const size = getTextSizeInPx(className);
  if (isFontAwesome) {
    return <FontAwesomeIcon icon={icon} className={className} />;
  } else if (isSimpleIcon) {
    return createElement(icon, { size, className });
  } else if (isSVG) {
    const SvgIcon = icon;
    return (
      <SvgIcon
        className={className}
        style={{ width: size, height: size }}
        alt={name}
      />
    );
  } else {
    console.error(`Icon "${name}" is not supported`);
    return null;
  }
};

export default Icon;
