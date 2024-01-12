import TabButton from "./TabButton";

export default function TabButtonBar({ tabs, selectedTab, setSelectedTab }) {
  return (
    <nav className="sm:w-fit w-full">
      <ul className="flex space-x-1 justify-around">
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            icon={tab.icon}
            text={tab.title}
            active={selectedTab === index}
            onClick={() => setSelectedTab(index)}
          />
        ))}
      </ul>
    </nav>
  );
}
