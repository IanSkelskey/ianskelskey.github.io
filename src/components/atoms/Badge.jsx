import Icon from "./Icon";
export default function Badge({ iconName, text, color }) {
  return (
    <div className={"rounded-md w-fit"} style={{ backgroundColor: color }}>
      <div className="flex items-center space-x-3 px-2 py-1/2 text-white w-fit">
        <Icon name={iconName} />
        <p>{text}</p>
      </div>
    </div>
  );
}
