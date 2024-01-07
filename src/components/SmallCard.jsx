import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SmallCard({ title, description, icon, accentColor }) {
    let iconClass;
    if(accentColor === "red") {
        iconClass = "text-red-500 text-3xl absolute top-6 left-5";
    } else if(accentColor === "blue") {
        iconClass = "text-blue-500 text-3xl absolute top-6 left-5";
    } else if(accentColor === "green") {
        iconClass = "text-green-500 text-3xl absolute top-6 left-5";
    } else if(accentColor === "yellow") {
        iconClass = "text-yellow-500 text-3xl absolute top-6 left-5";
    } else if(accentColor === "purple") {
        iconClass = "text-purple-500 text-3xl absolute top-6 left-5";
    } else if(accentColor === "pink") {
        iconClass = "text-pink-500 text-3xl absolute top-6 left-5";
    } else if(accentColor === "indigo") {
        iconClass = "text-indigo-500 text-3xl absolute top-6 left-5";
    } else if(accentColor === "gray") {
        iconClass = "text-gray-500 text-3xl absolute top-6 left-5";
    } else if(accentColor === "black") {
        iconClass = "text-black text-3xl absolute top-6 left-5";
    } else if(accentColor === "white") {
        iconClass = "text-white text-3xl absolute top-6 left-5";
    } else if(accentColor === "rose") {
        iconClass = "text-rose-500 text-3xl absolute top-6 left-5";
    }


    return (
        <div className="bg-black border-2 rounded-md border-neutral-800 p-6 relative">
            {/* Icon with accent color */}
            <FontAwesomeIcon icon={icon} className={iconClass} />
            <div className="flex flex-col space-y-3 pl-12">
                <h3 className="text-white text-xl">{title}</h3>
                <p className="text-neutral-400">{description}</p>
            </div>
        </div>
    );
}