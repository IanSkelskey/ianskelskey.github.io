import SmallCard from "./SmallCard";

export default function ThumbnailTitleSubtitleSmallCard({
  title,
  subtitle,
  thumbnail,
  children,
}) {
  return (
    <SmallCard>
      <div className="flex flex-col">
        <img src={thumbnail} alt={title} className="w-full" />
        <div className="flex flex-col space-y-3 p-3">
          <div className="flex items-center space-x-3">
            <div className="flex flex-col space-y-1">
              <p className="subtle-text">{subtitle}</p>
              <h3 className="text-md">{title}</h3>
            </div>
          </div>
          <div className="subtle-text">{children}</div>
        </div>
      </div>
    </SmallCard>
  );
}
