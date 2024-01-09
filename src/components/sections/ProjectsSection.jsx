import OotRetexture from "../content/projects/OotRetexture";
import ToyDrive from "../content/projects/ToyDrive";
import Section from "../layout/Section";

export default function ProjectsSection() {
    return (
        <Section title="Projects">
            <p className="subtle-text">
                I have worked on a variety of projects, including:
            </p>
            <OotRetexture />
            <ToyDrive />
        </Section>
    );
}