import Icon from "./Icon";
import { motion } from "framer-motion";

export default function IconLink({ icon, href }) {
  return (
    <motion.a href={href} target="_blank" rel="noreferrer" layout>
      <Icon
        name={icon}
        className="dark:text-neutral-400 text-neutral-600 text-xl p-2 dark:bg-neutral-900 bg-neutral-200 dark:hover:text-white hover:text-black rounded-md"
      />
    </motion.a>
  );
}
