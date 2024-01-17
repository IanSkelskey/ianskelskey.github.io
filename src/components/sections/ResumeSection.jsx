import ExperienceSmallCard from "../atoms/ExperienceSmallCard";
import Section from "../layout/Section";
import SubSection from "../layout/SubSection";
import ContentRow from "../layout/ContentRow";
import education from "../data/education";
import experience from "../data/experience";
import LevelMeter from "../atoms/LevelMeter";
import languages from "../data/languages";
import skills from "../data/skills";
import Badge from "../atoms/Badge";

export default function ResumeSection() {
  return (
    <Section title="Resume">
      <ContentRow>
        <div className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2">
          <SubSection title={"Education"} iconName="gradCap">
            <div className="flex flex-col space-y-6">
              {education.map((item) => (
                <ExperienceSmallCard
                  key={item.title}
                  title={item.title}
                  location={item.location}
                  date={item.date}
                />
              ))}
            </div>
          </SubSection>

          <SubSection title={"Experience"} iconName="projects">
            <div className="flex flex-col space-y-6">
              {experience.map((item) => (
                <ExperienceSmallCard
                  key={item.title}
                  title={item.title}
                  location={item.location}
                  employer={item.employer}
                  date={item.date}
                />
              ))}
            </div>
          </SubSection>
        </div>
      </ContentRow>
      <ContentRow useAltColor>
        <div className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2">
          <SubSection title="Languages" iconName="code" useAltColor>
            {languages.map((item) => (
              <LevelMeter
                key={item.title}
                title={item.title}
                iconName={item.iconName}
                level={item.level}
                color={item.accentColor}
              />
            ))}
          </SubSection>
          <SubSection title="Skills" iconName="gears" useAltColor>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {skills.map((item) => (
                <div key={item.category} className="space-y-2">
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
            </div>
          </SubSection>
        </div>
      </ContentRow>
    </Section>
  );
}
