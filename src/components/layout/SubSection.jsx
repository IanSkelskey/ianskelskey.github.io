import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SubSection({ title, icon, children }) {
    return (
        <div className="flex flex-col space-y-3 min-w-full">
            <div className="flex items-center text-2xl space-x-3">
                {(icon) && <FontAwesomeIcon icon={icon} />}
                <h3>{title}</h3>
            </div>
            {children}
        </div>
    )
}