import projects from "../../../data/projects";
import ProjectCard from "../../layout/ProjectCard";
import TitleIconSection from "../../layout/TitleIconSection";
import MotionGrid from "../../layout/MotionGrid";

export default function FeaturedProjectsSection() {
  return (
    <TitleIconSection title="Featured Projects" iconName="projects">
      <MotionGrid>
        {projects.filter((project) => project.featured).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </MotionGrid>

    </TitleIconSection>
  );
}
