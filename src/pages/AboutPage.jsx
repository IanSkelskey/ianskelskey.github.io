import FeaturedProjectsSection from "../components/content/FeaturedProjectsSection";
import TechStackSection from "../components/content/TechStackSection";
import WelcomeSection from "../components/content/WelcomeSection";
import WhatIDoSection from "../components/content/WhatIDoSection";
import Page from "../components/layout/Page";

export default function AboutPage() {
  return (
    <Page>
      <WelcomeSection />
      <WhatIDoSection />
      <FeaturedProjectsSection />
      <TechStackSection />
    </Page>

  );
}
