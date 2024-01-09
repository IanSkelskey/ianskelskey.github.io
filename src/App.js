import { faAddressBook, faBriefcase, faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import FloatingContactSection from './components/FloatingContactSection';
import AdaptiveProfileShowcase from './components/layout/AdaptiveProfileShowcase';
import AboutSection from './components/sections/AboutSection';
import TabNavigation from './components/layout/TabNavigation';
import { useState } from 'react';
import ProjectsSection from './components/sections/ProjectsSection';
import ResumeSection from './components/sections/ResumeSection';
import ContactSection from './components/sections/ContactSection';

const pages = [
  {
    title: "About",
    icon: faUser,
    content: <AboutSection />
  },
  {
    title: "Resume",
    icon: faFile,
    content: <ResumeSection />
  },
  {
    title: "Projects",
    icon: faBriefcase,
    content: <ProjectsSection />
  },
  {
    title: "Contact",
    icon: faAddressBook,
    content: <ContactSection />
  }
];

function App() {

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <AdaptiveProfileShowcase
      profileSection={<FloatingContactSection />}
      navSection={
        <TabNavigation
          tabs={pages}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
      }
    >
      {pages[selectedTab].content}
    </AdaptiveProfileShowcase>
  );
}

export default App;
