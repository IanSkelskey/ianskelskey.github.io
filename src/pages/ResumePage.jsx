import Page from "../components/layout/Page";
import SkillsSection from "../components/content/SkillsSection";
import LanguagesSection from "../components/content/LanguagesSection";
import ExperienceSection from "../components/content/ExperienceSection";
import EducationSection from "../components/content/EducationSection";

export default function ResumePage() {
  const blurb = "Aspiring software engineer that recently completed a BS in Software Engineering at Arizona State University, with a strong foundation in React and a passion for interaction design and accessibility. Eager to contribute to a company whose products and mission align with my values and skillset."
  return (
    <Page title="Resume" blurb={blurb}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <EducationSection />
        <ExperienceSection />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <LanguagesSection />
        <SkillsSection />
      </div>
    </Page>
  );
}
