import type { DemoProject } from "../../types";
import ProjectCard from "./ProjectCard";

type ProjectGalleryProps = { projects: readonly DemoProject[] };

const ProjectGallery = ({ projects }: ProjectGalleryProps) => (
  <div className="grid gap-6 md:grid-cols-2">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default ProjectGallery;
