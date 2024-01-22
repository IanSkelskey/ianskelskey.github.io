import Badge from "../../atoms/Badge";
import CVSection from "../../layout/CVSection";

export default function SkillsSection({ skills }) {
  return (
    <CVSection title="Skills">
      {skills.map((item) => (
        <div key={item.category} className="gap-4">
          <h4 className="subtle-text italic pb-2">{item.category}</h4>
          <ul className="subtle-text flex gap-2 flex-wrap items-center">
            {item.skills.map((skill) => (
              <li key={skill.name} className="flex gap-1 items-center">
                <Badge iconName={skill.icon} text={skill.name}  />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </CVSection>
  );
}
