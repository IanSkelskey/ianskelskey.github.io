import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProgressMeter({ title, faIcon, siIcon, percent, color }) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <div className="flex flex-row justify-between">
        <div className="flex space-x-2 items-center">
          {faIcon && <FontAwesomeIcon className="text-xl" icon={faIcon} />}
          {siIcon && siIcon}
          <p className="subtle-text">{title}</p>
        </div>

        <p className="subtle-text">{percent + "%"}</p>
      </div>
      {/** Progress bar based on percent and color */}
      <div className="w-full h-2 dark:bg-neutral-400 bg-neutral-300 rounded-md">
        <div
          style={{ width: percent + "%", backgroundColor: color }}
          className="h-full rounded-md"
        ></div>
      </div>
    </div>
  );
}
