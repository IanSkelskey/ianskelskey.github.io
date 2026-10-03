import { useId } from "react";
import type { DemoProject } from "../../types";

type ProjectCardProps = { project: DemoProject };

const ProjectCard = ({ project }: ProjectCardProps) => {
  const headingId = useId();
  return (
    <article
      aria-labelledby={headingId}
      className={`flex flex-col gap-6 rounded-xl border bg-raised p-6 transition-colors hover:border-accent ${project.featured ? "border-accent/40 md:col-span-2 md:p-8" : "border-divider"}`}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="inline-flex rounded-full border border-divider px-3 py-1 text-xs font-semibold tracking-wide text-muted">
            {project.category}
          </p>
          {project.featured && (
            <span className="text-xs font-semibold text-accent">Featured project</span>
          )}
        </div>
        <h2
          id={headingId}
          className={`mt-4 font-bold tracking-tight text-foreground ${project.featured ? "text-3xl" : "text-2xl"}`}
        >
          {project.title}
        </h2>
        <p className="mt-3 max-w-prose leading-relaxed text-muted">{project.description}</p>
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-divider pt-5">
        <a
          href={project.primaryAction.href}
          aria-label={`${project.primaryAction.label}: ${project.title}`}
          className="inline-flex min-h-11 items-center rounded-lg bg-accent px-6 py-3 font-semibold text-on-accent transition-colors hover:bg-accent-hover"
        >
          {project.primaryAction.label}
        </a>
        {project.supportingActions.map((action) => (
          <a
            key={action.href}
            href={action.href}
            aria-label={`${action.label}: ${project.title}`}
            className="inline-flex min-h-11 items-center font-medium text-accent underline underline-offset-4 hover:text-accent-hover"
          >
            {action.label}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
