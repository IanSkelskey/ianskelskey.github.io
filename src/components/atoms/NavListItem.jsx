import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

export default function NavListItem({ name, icon, path }) {

    const location = useLocation();
    const currentPath = location.pathname;
    const active = currentPath === path;

    const colorClass = active ? "bg-theme-blue text-white" : "bg-neutral-200 dark:bg-neutral-900 subtle-text";
    return (
        <Link to={path}>
            <div className={colorClass}>
                <div className="flex flex-row space-x-4 w-full justify-center items-center py-3">
                    <Icon name={icon} className="text-xl w-8" />
                    <p>{name}</p>
                </div>
            </div>
        </Link>

    )
}