import languages from "../../data/languages";
import LevelMeter from "../atoms/LevelMeter";
import SubSection from "../layout/SubSection";

export default function LanguagesSection() {
    return (
        <SubSection title="Languages" iconName="code" useAltColor>
            {languages.map((item) => (
                <LevelMeter
                    key={item.name}
                    title={item.name}
                    iconName={item.icon}
                    level={item.level}
                    color={item.color}
                />
            ))}
        </SubSection>
    );
}