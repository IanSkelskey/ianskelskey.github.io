import BioBlurb from "../content/BioBlurb";
import WhatIDoSection from "../content/WhatIDoSection";
import Section from "../layout/Section";

export default function AboutSection() {
    return (
        <Section title="About Me">
            <BioBlurb className="subtle-text space-y-6" />
            <WhatIDoSection />
        </Section>
    )
}