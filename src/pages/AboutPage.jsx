import BioBlurb from "../components/content/BioBlurb";
import WhatIDoSection from "../components/content/WhatIDoSection";
import ContentRow from "../components/layout/ContentRow";
import Section from "../components/layout/Section";

export default function AboutPage() {
  return (
    <Section title="About Me">
      <ContentRow>
        <BioBlurb />
      </ContentRow>
      <ContentRow>
        <WhatIDoSection />
      </ContentRow>
    </Section>
  );
}
