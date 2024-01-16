import Icon from "./Icon";
export default function Badge({ iconName, text, color }) {
  const style = color ? { backgroundColor: color } : {};
  return (
    <div className={"rounded-md w-fit dark:bg-neutral-700 bg-neutral-500"} style={style}>
      <div className="flex items-center space-x-3 px-2 py-1/2 text-white w-fit">
        <Icon name={iconName} />
        <p>{text}</p>
      </div>
    </div>
  );
}
