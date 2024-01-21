import CVSection from "../../layout/CVSection";
import cvProjects from "../../../data/cvProjects";

export default function ProjectsSection() {
    return (
        <CVSection title="Projects">
            {cvProjects.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                    <p className="subltle-text italic">{item.title + " | " + item.date}</p>
                    <ul className="pl-5">
                        {item.bullets.map((bullet) => (
                            <li key={bullet} className="subltle-text list-disc">{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </CVSection>
    )
}