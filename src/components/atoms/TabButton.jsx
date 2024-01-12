import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TabButton({ icon, text, active, onClick }) {
  let className = active ? "active-tab" : "inactive-tab";
  return (
    <li>
      <button onClick={onClick} className={className}>
        <div className="flex flex-1 items-center space-x-2">
          <FontAwesomeIcon className="xs:text-xl text:lg" icon={icon} />
          <p className="xs:text-sm text-xs">{text}</p>
        </div>
      </button>
    </li>
  );
}
