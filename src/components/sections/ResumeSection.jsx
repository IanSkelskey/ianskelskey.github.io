import ExperienceSmallCard from "../atoms/ExperienceSmallCard";
import Section from "../layout/Section";
import { faGraduationCap, faBriefcase, faCode, faGears } from "@fortawesome/free-solid-svg-icons";
import SubSection from "../layout/SubSection";
import ProgressMeter from "../atoms/ProgressMeter";
import ContentRow from "../layout/ContentRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faGit, faGitAlt, faGithubAlt, faNodeJs, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";

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
                <div className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2">
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
                <div className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2">
                    <SubSection title="Languages" icon={faCode} useAltColor>
                        <ProgressMeter title="JavaScript" percent={75} color="orange" />
                        <ProgressMeter title="Java" percent={80} color="green" />
                        <ProgressMeter title="Lua" percent={65} color="purple" />
                        <ProgressMeter title="Python" percent={60} color="blue" />
                    </SubSection>
                    <SubSection title="Skills" icon={faGears} useAltColor>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <div>
                                <h3 className="text-lg">Front-End</h3>
                                <ul className="subtle-text flex gap-2 flex-wrap items-center">
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        <FontAwesomeIcon icon={faReact} /> React
                                    </li>
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        <FontAwesomeIcon icon={faVuejs} /> Vue
                                    </li>
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        Tailwind CSS
                                    </li>
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        Framer Motion
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg">Back-End</h3>
                                <ul className="subtle-text flex gap-2 flex-wrap items-center">
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        <FontAwesomeIcon icon={faNodeJs} /> Node.js
                                    </li>
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        Express
                                    </li>
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        <FontAwesomeIcon icon={faAws} /> AWS
                                    </li>
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        Firebase/Firestore
                                    </li>
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        SQL
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg">Version Control</h3>
                                <ul className="subtle-text flex gap-2 flex-wrap items-center">
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        <FontAwesomeIcon icon={faGitAlt} /> Git
                                    </li>
                                    <li className="px-2 py-1 dark:bg-neutral-800 bg-neutral-300 w-fit rounded-md">
                                        <FontAwesomeIcon icon={faGithubAlt} /> GitHub
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </SubSection>
                </div>
            </ContentRow>
        </Section>
    );
}