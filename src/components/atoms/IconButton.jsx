import Icon from "./Icon";

export default function IconButton({ icon, type, disabled, text, className, onClick }) {
    return (
        <div className={className}>
            <button className="flex flex-row space-x-2 items-center py-2 px-3"
            onClick={onClick}
            type={type || "button"}
            disabled={disabled || false}
        >
            <Icon name={icon} className="text-xl aspect-square" />
            {text && <p>{text}</p>}
        </button>
        </div>
        
    )
}