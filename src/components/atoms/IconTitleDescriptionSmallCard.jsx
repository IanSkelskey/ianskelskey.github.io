import SmallCard from "./SmallCard";
import Icon from "./Icon";

export default function IconTitleDescriptionSmallCard({
  title,
  description,
  iconName,
  accentColor,
}) {
  return (
    <SmallCard>
      <div className="flex flex-col space-y-3 p-3">
        <div className="flex items-center space-x-3 text-2xl">
        <div style={{color: accentColor}} >
          <Icon name={iconName} />
        </div>
          
          <h3 className="text-xl">{title}</h3>
        </div>
        <p className="subtle-text">{description}</p>
      </div>
    </SmallCard>
  );
}
