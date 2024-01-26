import projects from "../../../data/projects";
import ProjectCard from "../../layout/ProjectCard";
import TitleIconSection from "../../layout/TitleIconSection";

export default function FeaturedProjectsSection() {
  return (
    <TitleIconSection title="Featured Projects" iconName="projects">
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
        {projects.filter((project) => project.featured).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </TitleIconSection>
  );
}
