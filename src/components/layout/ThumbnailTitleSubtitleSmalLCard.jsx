import SmallCard from "./SmallCard";

export default function ThumbnailTitleSubtitleSmallCard({ title, subtitle, thumbnail, children }) {
    return (
        <SmallCard>
            <div className="flex flex-col space-y-3">
                <img src={thumbnail} alt={title} className="w-full rounded-md" />
                <div className="flex items-center space-x-3">

                    <div className="flex flex-col space-y-1">
                        <p className="subtle-text">{subtitle}</p>
                        <h3 className="text-md">{title}</h3>
                    </div>
                </div>
                {children}
            </div>
        </SmallCard>
    )
}