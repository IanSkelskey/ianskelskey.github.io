import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProjectsPage from "../pages/ProjectsPage";
import ResumePage from "../pages/ResumePage";
import FieldDayPage from "../pages/projects/FieldDayPage";
import GD50Page from "../pages/projects/GD50Page";
import OotRetexturePage from "../pages/projects/OotRetexturePage";
import ToyDrivePage from "../pages/projects/ToyDrivePage";

const pages = [
  {
    title: "About",
    icon: "user",
    path: "/",
    content: <AboutPage />,
    main: true,
  },
  {
    title: "Resume",
    icon: "resume",
    path: "/resume",
    content: <ResumePage />,
    main: true,
  },
  {
    title: "Projects",
    icon: "projects",
    path: "/projects",
    content: <ProjectsPage />,
    main: true,
  },
  {
    title: "Contact",
    icon: "contact",
    path: "/contact",
    content: <ContactPage />,
    main: true,
  },
  {
    title: "Oot Retexture",
    icon: "ocarina",
    path: "/projects/ocarina",
    content: <OotRetexturePage />,
    main: false,
  },
  {
    title: "Field Day",
    icon: "fieldDay",
    path: "/projects/fieldDay",
    content: <FieldDayPage />,
    main: false,
  },
  {
    title: "GD50 Intro to Game Development",
    icon: "gd50",
    path: "/projects/gd50",
    content: <GD50Page />,
    main: false,
  },
  {
    title: "Toy Drive",
    icon: "toyDrive",
    path: "/projects/toyDrive",
    content: <ToyDrivePage />,
    main: false,
  },
];

export default pages;
