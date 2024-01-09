import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Badge({ icon, text, bgColorClass }) {
    return (
        <div className={bgColorClass}>
            <div className="flex items-center space-x-3 px-2 py-1/2 text-white w-fit">
                <FontAwesomeIcon icon={icon} />
                <p>{text}</p>
            </div>
        </div>
    )
}