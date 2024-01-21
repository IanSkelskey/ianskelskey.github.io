import Icon from "../../atoms/Icon";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import SummarySection from "./SummarySection";

export default function CV() {
    return (

        <div className="flex flex-col bg-neutral-100 dark:bg-neutral-900 max-w-screen-xl mx-auto lg:p-4">
            {/* Title Section */}
            <div className="w-full text-center bg-theme-blue py-8 text-white italic flex flex-col -space-y-1">
                <h1 className="text-3xl font-serif font-bold">Ian Skelskey</h1>
                <p className="font-serif">Software Engineer</p>
            </div>
            {/* Professional Summary and Contact Info*/}
            <div className="flex flex-col xl:flex-row justify-between items-center w-full">
                <SummarySection />

                <ul className="flex flex-col space-y-2 xl:w-80 flex-shrink-0 flex-grow min-h-full w-full p-4 bg-neutral-200 dark:bg-neutral-800">
                    <li className="w-full flex gap-2 items-center"><Icon name="phone" /> 8608305595</li>
                    <li className="w-full flex gap-2 items-center"><Icon name="email" />ianskelskey@gmail.com</li>
                    <li className="w-full flex gap-2 items-center"><Icon name="linkedin" />in/ianskelskey</li>
                    <li className="w-full flex gap-2 items-center"><Icon name="github" /> github.com/ianskelskey</li>
                </ul>
            </div>

            <div className="flex flex-col xl:flex-row w-full">
                {/* Education, Experience, and Projects */}
                <div className="flex flex-col gap-4 w-full">
                    <ExperienceSection />
                    <ProjectsSection />
                </div>
                {/* Skills and Languages*/}
                <div className="xl:w-80 min-h-full flex-shrink-0 bg-neutral-200 dark:bg-neutral-800">
                    <SkillsSection />
                    <EducationSection />
                </div>
            </div>
        </div>
    )
}