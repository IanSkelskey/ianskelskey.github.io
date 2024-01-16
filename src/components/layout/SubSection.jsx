import Icon from "../atoms/Icon";

export default function SubSection({ title, iconName, children }) {
  return (
    <div className="flex flex-col space-y-3 min-w-full">
      <div className="flex items-center text-2xl space-x-3">
        {iconName && <Icon name={iconName} />}
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
}
