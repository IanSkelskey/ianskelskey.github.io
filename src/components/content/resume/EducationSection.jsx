import education from "../../../data/education";
import ExperienceSmallCard from "../../atoms/ExperienceSmallCard";
import SubSection from "../../layout/SubSection";

export default function EducationSection() {
    return (
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
    );
}