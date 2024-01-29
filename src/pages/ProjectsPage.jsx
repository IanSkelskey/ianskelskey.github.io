import { useEffect, useState } from "react";
import Page from "../components/layout/Page";
import ProjectCard from "../components/layout/ProjectCard";
import projects from "../data/projects";
import { AnimatePresence } from "framer-motion";
import Icon from "../components/atoms/Icon";

export default function ProjectsPage() {
  const blurb = "Here are some of the projects I've worked on. Click on a project to learn more. Filter by category to focus on a specific type of project.";

  const [filter, setFilter] = useState("All");
  const [sortCriterion, setSortCriterion] = useState("Name");
  const [sortDirection, setSortDirection] = useState("Ascending");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    let updatedProjects = projects;
    if (filter !== "All") {
      updatedProjects = projects.filter((project) => project.category === filter);
    }
    switch (sortCriterion) {
      case "Name":
        updatedProjects.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Date":
        // Dates are either years as strings or they simply state 'Current' if they are active
        updatedProjects.sort((a, b) => {
          if (a.date === "Current") {
            return -1;
          } else if (b.date === "Current") {
            return 1;
          } else {
            return b.date.localeCompare(a.date);
          }
        });
        break;
      default:
        // No sorting or default sorting logic
        break;
    }
    if (sortDirection === "Descending") {
      updatedProjects.reverse();
    }
    setFilteredProjects([...updatedProjects]);
  }, [filter, sortCriterion, sortDirection]);

  return (
    <Page title="Projects" blurb={blurb}>
      <div className="flex flex-col gap-4 p-4">
        <ul className="flex items-center justify-center gap-4 flex-wrap">
          <li><button className={filter === "All" ? "border-b-2 border-b-theme-blue p-2" : "p-2"} onClick={() => setFilter("All")}>All</button></li>
          <li><button className={filter === "Game Development" ? "border-b-2 border-b-theme-blue p-2" : "p-2"} onClick={() => setFilter("Game Development")}>Game Development</button></li>
          <li><button className={filter === "Web App" ? "border-b-2 border-b-theme-blue p-2" : "p-2"} onClick={() => setFilter("Web App")}>Web App</button></li>
          <li><button className={filter === "Generative AI" ? "border-b-2 border-b-theme-blue p-2" : "p-2"} onClick={() => setFilter("Generative AI")}>Generative AI</button></li>
        </ul>
        <div className="flex gap-4 items-center justify-end">
          <p>Sort by:</p>
          <select
            className="flex items-center justify-center gap-4 flex-wrap bg-white dark:bg-black border-2 border-neutral-800 p-2 rounded-md max-w-fit"
            onChange={(e) => setSortCriterion(e.target.value)}
          >
            <option value="Name">Name</option>
            <option value="Date">Date</option>
          </select>
          <button onClick={() => setSortDirection(sortDirection === "Ascending" ? "Descending" : "Ascending")}>{(sortDirection === "Ascending" ? <Icon name="sortUp" className="text-xl" /> : <Icon name="sortDown" className="text-xl" />)}</button>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>

        </div>
      </div>



    </Page>
  );
}
