import Icon from "./Icon";

export default function LevelMeter({
    title,
    iconName,
    level,
    color
}) {
    // Up to 5 levels return a component with the icon and the title above it.
    // The level bar should consist of 5 equal sizes small bars

    let levelBars = [];

    for (let i = 0; i < 5; i++) {
        if (i < level) {
            levelBars.push(
                <div className="h-2 flex-1 rounded-sm" key={i} style={{ backgroundColor: color }}></div>
            )
        } else {
            levelBars.push(
                <div className="h-2 flex-1 dark:bg-neutral-400 bg-neutral-300 rounded-sm" key={i}></div>
            )
        }
    }

    return (
        <div className="flex flex-col space-y-3 min-w-full">
            <div className="flex space-x-2 items-center justify-between">
                <Icon name={iconName} className="text-3xl" />
                <p className="subtle-text">{title}</p>
            </div>
            <div className="flex flex-row space-x-1 justify-between">
                {levelBars}
            </div>
        </div>
    )
}

