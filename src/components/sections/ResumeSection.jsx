import ExperienceSmallCard from "../layout/ExperienceSmallCard";
import Section from "../layout/Section";
import { faGraduationCap, faBriefcase, faCode, faGears } from "@fortawesome/free-solid-svg-icons";
import SubSection from "../layout/SubSection";
import ProgressMeter from "../atoms/ProgressMeter";
import ContentRow from "../layout/ContentRow";

const education = [
    {
        title: "B.S. Software Engineering",
        date: "2023",
        location: "Arizona State University"
    },
    {
        title: "Certificate in Computer Programming",
        date: "2021",
        location: "CT State Tunxis"
    },
    {
        title: "A.S. Mathematics/Computer Science (Honors)",
        date: "2019",
        location: "CT State Tunxis"
    },
]

const experience = [
    {
        title: "Professional Tutor",
        date: "2012 - Present",
        location: "CT State Tunxis"
    },
    {
        title: "Supplemental Instruction (SI) Leader",
        date: "Fall 2023",
        location: "CT State Tunxis"
    }
]

export default function ResumeSection() {
    return (
        <Section title="Resume">
            <ContentRow>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <SubSection title={"Education"} icon={faGraduationCap}>
                        <div className="flex flex-col space-y-6">
                            {education.map(item => (
                                <ExperienceSmallCard
                                    title={item.title}
                                    date={item.date}
                                    location={item.location}
                                />
                            ))}
                        </div>
                    </SubSection>

                    <SubSection title={"Experience"} icon={faBriefcase}>
                        <div className="flex flex-col space-y-6">
                            {experience.map(item => (
                                <ExperienceSmallCard
                                    title={item.title}
                                    date={item.date}
                                    location={item.location}
                                />
                            ))}
                        </div>
                    </SubSection>

                </div>
            </ContentRow>
            <ContentRow useAltColor>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <SubSection title="Languages" icon={faCode} useAltColor>
                        <ProgressMeter title="JavaScript" percent={75} color="orange" />
                        <ProgressMeter title="Java" percent={80} color={"green"} />
                        <ProgressMeter title="Lua" percent={65} color="purple" />
                    </SubSection>
                    <SubSection title="Skills" icon={faGears} useAltColor>
                    </SubSection>
                </div>
            </ContentRow>
        </Section>
    );
}