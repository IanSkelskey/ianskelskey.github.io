import { useEffect, useState } from "react";
import Page from "../components/layout/Page";
import ProjectCard from "../components/layout/ProjectCard";
import projects from "../data/projects";
import { AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const blurb = "Here are some of the projects I've worked on. Click on a project to learn more. Filter by category to focus on a specific type of project.";

  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter !== "All") {
      setFilteredProjects(
        projects.filter((project) => project.category === filter)
      );
    } else {
      setFilteredProjects(projects);
    }
  }, [filter]);

  return (
    <Page title="Projects" blurb={blurb}>
      <ul className="flex items-center justify-center gap-4 flex-wrap">
        <li><button className={filter === "All" ? "border-b-2 border-b-theme-blue p-2" : "p-2"} onClick={() => setFilter("All")}>All</button></li>
        <li><button className={filter === "Game Mod" ? "border-b-2 border-b-theme-blue p-2" : "p-2"} onClick={() => setFilter("Game Mod")}>Game Mod</button></li>
        <li><button className={filter === "Game Development" ? "border-b-2 border-b-theme-blue p-2" : "p-2"} onClick={() => setFilter("Game Development")}>Game Development</button></li>
        <li><button className={filter === "Web App" ? "border-b-2 border-b-theme-blue p-2" : "p-2"} onClick={() => setFilter("Web App")}>Web App</button></li>
        <li><button className={filter === "Generative AI" ? "border-b-2 border-b-theme-blue p-2" : "p-2"} onClick={() => setFilter("Generative AI")}>Generative AI</button></li>
      </ul>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 p-4">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>

      </div>
    </Page>
  );
}
