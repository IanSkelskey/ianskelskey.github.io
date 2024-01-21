import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import SummarySection from "./SummarySection";

export default function CV() {
    return (

        <div className="flex flex-col bg-neutral-100 dark:bg-neutral-900 max-w-screen-xl mx-auto xl:p-4">
            {/* Title Section */}
            <div className="w-full text-center bg-theme-blue py-8 text-white italic flex flex-col -space-y-1">
                <h1 className="text-3xl font-serif font-bold">Ian Skelskey</h1>
                <p className="font-serif">Software Engineer</p>
            </div>
            {/* Professional Summary and Contact Info*/}
            <div className="flex flex-col-reverse xl:flex-row justify-between items-center w-full">
                <SummarySection />
                <ContactSection />
            </div>

            <div className="flex flex-col xl:flex-row w-full">
                {/* Main Content */}
                <div className="flex flex-col gap-4 w-full">
                    <ExperienceSection />
                    <ProjectsSection />
                </div>
                {/* Right Side Bar*/}
                <div className="xl:w-80 min-h-full flex-shrink-0 bg-neutral-200 dark:bg-neutral-800">
                    <SkillsSection />
                    <EducationSection />
                </div>
            </div>
        </div>
    )
}