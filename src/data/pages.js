import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import ProjectsPage from "../../pages/ProjectsPage";
import ResumePage from "../../pages/ResumePage";

const pages = [
    {
      title: "About",
      icon: "user",
      content: <AboutPage />,
    },
    {
      title: "Resume",
      icon: "resume",
      content: <ResumePage />,
    },
    {
      title: "Projects",
      icon: "projects",
      content: <ProjectsPage />,
    },
    {
      title: "Contact",
      icon: "contact",
      content: <ContactPage />,
    },
  ];

  export default pages;