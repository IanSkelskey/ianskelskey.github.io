import ExperienceSmallCard from "../components/atoms/ExperienceSmallCard";
import SubSection from "../components/layout/SubSection";
import education from "../data/education";
import experience from "../data/experience";
import LevelMeter from "../components/atoms/LevelMeter";
import languages from "../data/languages";
import skills from "../data/skills";
import Badge from "../components/atoms/Badge";
import Page from "../components/layout/Page";

export default function ResumePage() {
  const blurb = "Aspiring software engineer that recently completed a BS in Softftware Engineering at Arizona State University, with a strong foundation in React and a passion for interaction design and accessibility. Eager to contribute to a company whose products and mission align with my values and skillset."
  return (
    <Page title="Resume" blurb={blurb}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SubSection title={"Education"} iconName="gradCap">
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
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
    </Page>
  );
}
