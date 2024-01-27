import NavListItem from "./NavListItem";
import { motion } from "framer-motion";

export default function NavList({ pages, minimize }) {
  return (
    <motion.nav className="flex flex-col justify-center w-full gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout>
      {pages.map((page, index) => (
        <NavListItem
          key={index}
          name={page.title}
          icon={page.icon}
          path={page.path}
          minimize={minimize}
        />
      ))}
    </motion.nav>
  );
}
