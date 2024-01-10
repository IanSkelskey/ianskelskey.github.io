import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmallCard from "./SmallCard";

export default function IconTitleDescriptionSmallCard({ title, description, icon, accentColor }) {
    return (
        <SmallCard>
            <div className="flex flex-col space-y-3 p-3">
                <div className="flex items-center space-x-3 text-2xl">
                    <FontAwesomeIcon icon={icon} color={accentColor} />
                    <h3 className="text-xl">{title}</h3>
                </div>
                <p className="subtle-text">{description}</p>
            </div>
        </SmallCard>
    )
}