import AdaptiveProfileShowcase from "./components/layout/AdaptiveProfileShowcase";
import AboutSection from "./components/sections/AboutSection";
import { useState } from "react";
import ProjectsSection from "./components/sections/ProjectsSection";
import ResumeSection from "./components/sections/ResumeSection";
import ContactSection from "./components/sections/ContactSection";
import TabButtonBar from "./components/atoms/TabButtonBar";
import Footer from "./components/content/Footer";
import ContactCard from "./components/sections/ContactCard";
import Icon from "./components/atoms/Icon";

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
        <div className="w-full flex flex-col items-center">
          <nav className="flex flex-col justify-center w-full text-xl space-y-4">
            {pages.map((page, index) => (
              <button className="flex flex-row space-x-4 w-2/3 justify-center items-center" key={index} onClick={() => setSelectedTab(index)}>
                <Icon name={page.icon} className="text-xl w-8" />
                <p className="subtle-text">{page.title}</p>
              </button>
            ))}
          </nav>
        </div>

      }
      footer={<Footer />}
    >
      {pages[selectedTab].content}
    </AdaptiveProfileShowcase>
  );
}

export default App;
