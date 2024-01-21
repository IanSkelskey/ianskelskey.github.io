import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

export default function NavListItem({ name, icon, path }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const active = currentPath === path;

  const colorClass = active
    ? "bg-theme-blue text-white hover:bg-theme-blue-light"
    : "bg-neutral-200 dark:bg-neutral-900 subtle-text hover:invert";
  return (
    <Link to={path}>
      <div className={colorClass}>
        <div className="flex flex-row gap-5 w-full justify-center items-center py-3">
          <Icon name={icon} />
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
}
