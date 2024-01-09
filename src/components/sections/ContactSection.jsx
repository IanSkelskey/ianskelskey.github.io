import ContentRow from "../layout/ContentRow";
import Section from "../layout/Section";
import SubSection from "../layout/SubSection";

export default function ContactSection() {
    return (
        <Section title="Contact">
            <ContentRow>
                <SubSection>
                    <p>
                        Contact here.
                    </p>
                </SubSection>
            </ContentRow>
        </Section>
    );
}