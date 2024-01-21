import FeaturedProjectsSection from "../components/content/about/FeaturedProjectsSection";
import TechStackSection from "../components/content/about/TechStackSection";
import WelcomeSection from "../components/content/about/WelcomeSection";
import WhatIDoSection from "../components/content/about/WhatIDoSection";
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
