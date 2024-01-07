import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SmallCard({ title, description, icon, accentColor }) {
    let iconClass;
    if (accentColor === "red") {
        iconClass = "text-red-500 text-2xl";
    } else if (accentColor === "blue") {
        iconClass = "text-blue-500 text-2xl";
    } else if (accentColor === "green") {
        iconClass = "text-green-500 text-2xl";
    } else if (accentColor === "yellow") {
        iconClass = "text-yellow-500 text-2xl";
    } else if (accentColor === "purple") {
        iconClass = "text-purple-500 text-2xl";
    } else if (accentColor === "pink") {
        iconClass = "text-pink-500 text-2xl";
    } else if (accentColor === "indigo") {
        iconClass = "text-indigo-500 text-2xl";
    } else if (accentColor === "gray") {
        iconClass = "text-gray-500 text-2xl";
    } else if (accentColor === "black") {
        iconClass = "text-black text-2xl";
    } else if (accentColor === "white") {
        iconClass = "text-white text-2xl";
    } else if (accentColor === "rose") {
        iconClass = "text-rose-500 text-2xl";
    }


    return (
        <div className="dark:bg-black bg-white border-2 rounded-md dark:border-neutral-800 border-neutral-300 p-6 relative space-y-3">
            <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={icon} className={iconClass} />
                <h3 className="text-xl">{title}</h3>
            </div>
            <p className="subtle-text">{description}</p>
        </div>
    );
}