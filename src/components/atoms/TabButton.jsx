import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TabButton({ icon, text, active, onClick}) {
    let className;
    if (active) {
        className = "active-tab flex flex-1 items-center space-x-2";
    } else {
        className = "inactive-tab flex flex-1 items-center space-x-2";
    }
    return (
        <li>
            <button onClick={onClick} className={className}>
                <FontAwesomeIcon className="xs:text-xl text:lg" icon={icon} />
                <p className="xs:text-sm text-xs">{text}</p>
            </button>
        </li>
    );
}