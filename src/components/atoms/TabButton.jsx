import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TabButton({ icon, text, active, onClick }) {
  let className = active ? "active-tab" : "inactive-tab";
  return (
    <li>
      <button onClick={onClick} className={className}>
        <div className="flex flex-1 items-center space-x-2">
          <FontAwesomeIcon className="text-xl" icon={icon} />
          <p className="text-sm">{text}</p>
        </div>
      </button>
    </li>
  );
}
