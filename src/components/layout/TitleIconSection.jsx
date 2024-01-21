import Icon from "../atoms/Icon";

export default function TitleIconSection({ title, iconName, children }) {
  return (
    <div className="flex flex-col space-y-3 p-4">
      <div className="flex items-center text-2xl space-x-3">
        {iconName && <Icon name={iconName} className="text-2xl" />}
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
}
