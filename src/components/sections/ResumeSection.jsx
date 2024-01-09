import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExperienceSmallCard from "../layout/ExperienceSmallCard";
import Section from "../layout/Section";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const education = [
    {
        title: "B.S. Software Engineering",
        date: "2023",
        location: "Arizona State University"
    },
    {
        title: "A.S. Mathematics/Computer Science (Honors)",
        date: "2018",
        location: "CT State Tunxis"
    }
]

const experience = [
    {
        title: "Professional Tutor",
        date: "2012 - Present",
        location: "CT State Tunxis"
    },
    {
        title: "SI Leader",
        date: "2023",
        location: "CT State Tunxis"
    }
]

export default function ResumeSection() {
    return (
        <Section title="Resume">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="flex flex-col space-y-6">
                    <div className="flex items-center text-2xl space-x-3">
                        <FontAwesomeIcon icon={faGraduationCap} className="fa-blue-gradient" />
                        <h2>Education</h2>
                    </div>

                    {education.map(item => (
                        <ExperienceSmallCard
                            title={item.title}
                            date={item.date}
                            location={item.location}
                        />
                    ))}
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="flex items-center text-2xl space-x-3">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <h2>Experience</h2>
                    </div>

                    {experience.map(item => (
                        <ExperienceSmallCard
                            title={item.title}
                            date={item.date}
                            location={item.location}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}