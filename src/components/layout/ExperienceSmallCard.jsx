import SmallCard from "./SmallCard";

export default function ExperienceSmallCard({ children, title, date, location }) {
    return (
        <SmallCard>
            <div className="flex flex-col space-y-1 p-3">
                <p className="subtle-text">{date}</p>
                <div className="flex items-center space-x-3 text-2xl">
                    <h3 className="text-xl">{title}</h3>
                </div>
                <p className="subtle-text">{location}</p>
                {children}
            </div>
        </SmallCard>
    )
}