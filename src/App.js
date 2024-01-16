import AdaptiveProfileShowcase from "./components/layout/AdaptiveProfileShowcase";
import AboutSection from "./components/sections/AboutSection";
import { useState } from "react";
import ProjectsSection from "./components/sections/ProjectsSection";
import ResumeSection from "./components/sections/ResumeSection";
import ContactSection from "./components/sections/ContactSection";
import TabButtonBar from "./components/atoms/TabButtonBar";
import Footer from "./components/content/Footer";
import ContactCard from "./components/sections/ContactCard";

const pages = [
  {
    title: "About",
    icon: "user",
    content: <AboutSection />,
  },
  {
    title: "Resume",
    icon: "resume",
    content: <ResumeSection />,
  },
  {
    title: "Projects",
    icon: "projects",
    content: <ProjectsSection />,
  },
  {
    title: "Contact",
    icon: "contact",
    content: <ContactSection />,
  },
];

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <AdaptiveProfileShowcase
      profileSection={<ContactCard />}
      navSection={
        <TabButtonBar
          tabs={pages}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      }
      footer={<Footer />}
    >
      {pages[selectedTab].content}
    </AdaptiveProfileShowcase>
  );
}

export default App;
