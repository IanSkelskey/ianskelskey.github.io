import techStack from "../../data/techStack";
import Badge from "../atoms/Badge";
import SubSection from "../layout/SubSection";

export default function TechStackSection() {
  return (
    <SubSection title="This Portfolio's Tech Stack" iconName="stack">
      <p>This portfolio was built using the following technologies:</p>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <Badge key={tech.name} text={tech.name} iconName={tech.icon} color={tech.color} />
        ))} 
      </div>
    </SubSection>
  );
}
