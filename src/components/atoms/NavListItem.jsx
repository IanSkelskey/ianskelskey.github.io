import Icon from "./Icon";

export default function NavListItem({ name, icon, active, onClick }) {
    const colorClass = active ? "bg-theme-blue text-white" : "bg-neutral-200 dark:bg-neutral-900 subtle-text";
    return (
        <div className={colorClass}>
            <button
                className="flex flex-row space-x-4 w-full justify-center items-center py-3"
                onClick={onClick}
            >
                <Icon name={icon} className="text-xl w-8" />
                <p>{name}</p>
            </button>
        </div>

    )
}