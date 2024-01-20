import experience from "../../../data/experience";
import ExperienceSmallCard from "../../atoms/ExperienceSmallCard";
import SubSection from "../../layout/SubSection";

export default function ExperienceSection() {
    return (
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
    );
}