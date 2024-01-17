import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import ProjectsSection from "../sections/ProjectsSection";
import ResumeSection from "../sections/ResumeSection";

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

  export default pages;