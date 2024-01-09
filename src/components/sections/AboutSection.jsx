import BioBlurb from "../content/BioBlurb";
import WhatIDoSection from "../content/WhatIDoSection";
import ContentRow from "../layout/ContentRow";
import Section from "../layout/Section";

export default function AboutSection() {
    return (
        <Section title="About Me">
            <ContentRow>
                <BioBlurb />
            </ContentRow>
            <ContentRow>
                <WhatIDoSection />
            </ContentRow>
        </Section>
    )
}