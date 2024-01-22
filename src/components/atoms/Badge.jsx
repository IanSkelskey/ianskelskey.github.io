import Icon from "./Icon";
export default function Badge({ iconName, text, color }) {
  const style = color ? { backgroundColor: color } : {};
  style.color = "white";
  // If color is sufficiently light, set text color to black automatically.
  if (color && color.charAt(0) === "#") {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (luma > 186) {
      style.color = "black";
    }
  }
  return (
    <div
      className={"rounded-md w-fit dark:bg-neutral-700 bg-neutral-500 text-sm select-none"}
      style={style}
    >
      <div className="flex items-center space-x-2 px-2 py-0.5 w-fit">
        <Icon name={iconName} />
        <p>{text}</p>
      </div>
    </div>
  );
}
