import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";
import { AnimatePresence, motion } from "framer-motion";

export default function NavListItem({ name, icon, path, minimize }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const active = currentPath === path;

  const colorClass = active
    ? "bg-theme-blue text-white hover:bg-theme-blue-light"
    : "bg-neutral-200 dark:bg-neutral-900 subtle-text hover:invert";
  return (
    <Link to={path}>
      <motion.div className={colorClass} layout>
        <motion.div className="flex flex-row gap-5 w-full justify-center items-center py-3" layout>
          <Icon name={icon} className={minimize? "text-lg" : "text-base"} />
          <AnimatePresence>
            {!minimize && 
            <motion.p
              initial={{ width: 'auto', opacity: 0, scale: 0}}
              animate={{ width: 'auto', opacity: 1, scale: 1 }}
              exit={{ width: 0, opacity: 0, height: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              layout
            >{name}</motion.p>}
          </AnimatePresence>

        </motion.div>
      </motion.div>
    </Link>
  );
}