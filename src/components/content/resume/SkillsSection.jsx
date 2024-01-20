import skills from "../../../data/skills";
import Badge from "../../atoms/Badge";
import SubSection from "../../layout/SubSection";

export default function SkillsSection() {
    return (
        <SubSection title="Skills" iconName="gears" useAltColor>
            {skills.map((item) => (
                <div key={item.category} className="gap-4">
                    <h3 className="text-xl">{item.category}</h3>
                    <ul className="subtle-text flex gap-2 flex-wrap items-center">
                        {item.skills.map((skill) => (
                            <li key={skill.name} className="flex gap-1 items-center">
                                <Badge iconName={skill.icon} text={skill.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </SubSection>
    );
}