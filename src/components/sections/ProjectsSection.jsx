import OotRetexture from "../content/projects/OotRetexture";
import ToyDrive from "../content/projects/ToyDrive";
import ContentRow from "../layout/ContentRow";
import Section from "../layout/Section";
import SubSection from "../layout/SubSection";

export default function ProjectsSection() {
    return (
        <Section title="Projects">
            <ContentRow>
                <SubSection>
                    <p className="subtle-text">
                        I have worked on a variety of projects, including:
                    </p>
                </SubSection>
            </ContentRow>
            <ContentRow>
                <OotRetexture />
            </ContentRow>
            <ContentRow>
                <ToyDrive />
            </ContentRow>
        </Section>
    );
}