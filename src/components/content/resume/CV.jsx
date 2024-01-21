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

                <ul className="flex xl:flex-col items-center xl:items-start justify-around space-y-2 xl:w-80 flex-shrink-0 flex-grow min-h-full w-full xl:p-12 p-4 bg-neutral-200 dark:bg-neutral-800 subtle-text text-xl xl:text-base">
                    <li>
                        <a href="tel:8608305595" className="flex gap-4 items-center">
                            <Icon name="phone" />
                            <div className="hidden xl:inline">8608305595</div>
                        </a>
                    </li>
                    <li className="flex gap-4 items-center">
                        <a href="mailto:ianskelskey@gmail.com" className="flex gap-4 items-center">
                            <Icon name="email" />
                            <div className="hidden xl:inline">ianskelskey@gmail.com</div>
                        </a>
                    </li>
                    <li className="flex gap-4 items-center">
                        <a href="https://www.linkedin.com/in/ianskelskey" className="flex gap-4 items-center">
                            <Icon name="linkedin" />
                            <div className="hidden xl:inline">in/ianskelskey</div>
                        </a>
                    </li>
                    <li className="flex gap-4 items-center">
                        <a href="https://github.com/ianskelskey" className="flex gap-4 items-center">
                            <Icon name="github" />
                            <div className="hidden xl:inline">github.com/ianskelskey</div>
                        </a>
                    </li>
                </ul>
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