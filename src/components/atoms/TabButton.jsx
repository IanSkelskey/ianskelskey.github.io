import Icon from "./Icon";

export default function TabButton({ iconName, text, active, onClick }) {
  let className = active ? "active-tab" : "inactive-tab";
  return (
    <li>
      <button onClick={onClick} className={className}>
        <div className="flex flex-1 items-center space-x-2">
          <Icon className="text-xl" name={iconName} />
          <p className="text-sm">{text}</p>
        </div>
      </button>
    </li>
  );
}
