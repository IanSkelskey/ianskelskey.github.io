import Icon from "./Icon";

export default function IconButton({ icon, text, className, onClick }) {
    return (
        <div className={className}>
            <button className="flex flex-row space-x-2 items-center py-3 px-4 subtle-text"
            onClick={onClick}
        >
            <Icon name={icon} className="text-xl aspect-square" />
            {text && <p className="subtle-text">{text}</p>}
        </button>
        </div>
        
    )
}