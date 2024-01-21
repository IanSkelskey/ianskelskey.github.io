import CVSection from "../../layout/CVSection";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

export default function CV({ cvDetails }) {
  const {
    name,
    title,
    summary,
    contact,
    experience,
    projects,
    skills,
    education,
  } = cvDetails;

  return (
    <div className="flex flex-col bg-neutral-100 dark:bg-neutral-900 max-w-screen-xl mx-auto xl:p-4">
      {/* Title Section */}
      <div className="w-full text-center bg-theme-blue py-8 text-white italic flex flex-col -space-y-1 shadow-lg shadow-neutral-400 dark:shadow-neutral-900 z-50">
        <h1 className="text-3xl font-serif font-bold">{name}</h1>
        <p className="font-serif">{title}</p>
      </div>
      {/* Professional Summary and Contact Info*/}
      <div className="flex flex-col-reverse xl:flex-row justify-between items-center w-full">
        <CVSection title="Summary">{summary}</CVSection>
        <ContactSection contactInfo={contact} />
      </div>

      <div className="flex flex-col xl:flex-row w-full">
        {/* Main Content */}
        <div className="flex flex-col gap-4 w-full">
          <ExperienceSection experienceItems={experience} />
          <ProjectsSection projectItems={projects} />
        </div>
        {/* Right Side Bar*/}
        <div className="xl:w-80 min-h-full flex-shrink-0 bg-neutral-200 dark:bg-neutral-800">
          <SkillsSection skills={skills} />
          <EducationSection educationItems={education} />
        </div>
      </div>
    </div>
  );
}
