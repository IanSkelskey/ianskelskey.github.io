import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

export default function CV() {
    return (

        <div className="flex flex-col bg-neutral-100 dark:bg-neutral-900 gap-6 max-w-screen-xl mx-auto">
            {/* Title Section */}
            <div className="w-full text-center bg-theme-blue py-8 text-white">
                <h1 className="text-3xl font-serif font-bold ">Ian Skelskey</h1>
                <p className="text-lg">Software Engineer</p>
            </div>
            {/* Professional Summary and Contact Info*/}
            <div className="flex justify-between items-center gap-6">
                <p className="italic border-l-4 border-theme-blue p-4">
                    Software engineer that recently completed a BS in Software Engineering at Arizona State University, with a strong foundation in React and a passion for interaction design and accessibility. Eager to contribute to a company whose products and mission align with my values and skillset.
                </p>
                <ul className="flex flex-col space-y-2 w-96 p-4">
                    <li>Phone</li>
                    <li>Email</li>
                    <li>Portfolio</li>
                </ul>
            </div>

            <div className="flex gap-4 w-full p-4">
                {/* Education, Experience, and Projects */}
                <div className="flex flex-col gap-4 w-full">
                    <EducationSection />
                    <ExperienceSection />
                </div>
                {/* Skills and Languages*/}
                <div className="w-96">
                    <SkillsSection />
                </div>
            </div>
        </div>
    )
}