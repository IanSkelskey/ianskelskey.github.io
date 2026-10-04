import type { DemoProject } from "../../types";
import ProjectCard from "./ProjectCard";

type ProjectGalleryProps = {
  projects: readonly DemoProject[];
  /** Three columns on wide screens, for smaller items like asset packs. */
  compact?: boolean;
};

const ProjectGallery = ({ projects, compact = false }: ProjectGalleryProps) => (
  <div className={`grid gap-6 sm:grid-cols-2 ${compact ? "lg:grid-cols-3" : ""}`}>
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default ProjectGallery;
