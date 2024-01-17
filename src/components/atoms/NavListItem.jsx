import Icon from "./Icon";

export default function NavListItem({ name, icon, active, onClick }) {
    return (
        <button
            className="flex flex-row space-x-4 w-full justify-center items-center dark:bg-neutral-900 bg-neutral-200 py-3 subtle-text"
            onClick={onClick}
        >
            <Icon name={icon} className="text-xl w-8" />
            <p className="subtle-text">{name}</p>
        </button>
    )
}