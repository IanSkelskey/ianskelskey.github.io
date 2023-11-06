import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faReact, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <section className="my-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>
                I'm a Software Engineering student at Arizona State University and a Shift Supervisor and Barista Trainer at Starbucks. I'm passionate about video game development and design. My goal is to work for a company that makes products I respect, ideally as a software developer or designer.
            </p>
            <section className="my-12">
                <h2 className="text-3xl font-bold mb-4">Education</h2>
                <div>
                    <h3 className="text-2xl font-semibold">B.S. in Software Engineering</h3>
                    <p className="italic">Arizona State University - 2023</p>
                    <h3 className='text-2xl font-semibold'>A.S. in Computer Science/Mathematics (Honors)</h3>
                    <p className="italic">Tunxis Community College - 2019</p>
                </div>
            </section>

            <section className="my-12">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Replace with your actual skills */}
                    <div className="flex">
                        <FontAwesomeIcon icon={faJava} size="lg" />
                        Java
                    </div>
                    <span className="skill-badge">
                        <FontAwesomeIcon icon={faReact} size="lg" />
                        React
                    </span>
                    <span className="skill-badge">
                        <FontAwesomeIcon icon={faCss3} size="lg" />
                        CSS
                    </span>
                    <span className="skill-badge">
                        <FontAwesomeIcon icon={faGamepad} size="lg" />
                        Game Development
                    </span>
                </div>
            </section>

        </section>
    )
}