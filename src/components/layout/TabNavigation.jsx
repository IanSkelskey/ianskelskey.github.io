import TabButton from "../atoms/TabButton";

export default function TabNavigation({ tabs, selectedTab, setSelectedTab }) {
    return (
        <nav className="sm:w-fit w-full">
            <ul className="flex xs:space-x-2 space-x-1 justify-between xs:justify-around">
                {tabs.map((tab, index) => (
                    <TabButton key={index} icon={tab.icon} text={tab.title} active={selectedTab === index} onClick={() => setSelectedTab(index)} />
                ))}
            </ul>
        </nav>
    )
}