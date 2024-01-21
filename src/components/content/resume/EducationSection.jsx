import education from "../../../data/education";
import CVSection from "../../layout/CVSection";

export default function EducationSection() {
    return (
        <CVSection title="Education">
            {education.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                    <p className="subltle-text italic">{item.title + " | " + item.location + " | " + item.date}</p>
                </div>
            ))}
        </CVSection>
    );
}