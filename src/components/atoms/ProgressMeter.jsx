export default function ProgressMeter({ title, percent, color }) {
    return (
        <div className="flex flex-col space-y-2 w-full">
            <div className="flex flex-row justify-between">
                <p className="subtle-text">{title}</p>
                <p className="subtle-text">{percent + "%"}</p>
            </div>
            {/** Progress bar based on percent and color */}
            <div className="w-full h-2 dark:bg-neutral-400 bg-neutral-300 rounded-md">
                <div style={{ width: percent + "%", backgroundColor: color }} className="h-full rounded-md"></div>
            </div>
        </div>
    )
}