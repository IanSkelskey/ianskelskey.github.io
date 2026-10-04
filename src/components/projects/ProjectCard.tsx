import { useId } from "react";
import type { DemoProject } from "../../types";
import { BASE_PATH } from "../../config/env";
import "./ProjectCard.css";

type ProjectCardProps = { project: DemoProject };

/**
 * - `stacked`: the default grid card, image over text.
 * - `split`: featured, spanning the row with image beside text.
 * - `banner`: featured with a 12:5 banner, which a split cell would crop, so
 *   the banner spans the top and the text and actions sit side by side below.
 */
type CardLayout = "stacked" | "split" | "banner";

/** Remote images (e.g. itch.io covers) are used as-is; local ones live under `public/`. */
const resolveThumbnail = (thumbnail: string) =>
  /^https?:\/\//.test(thumbnail) ? thumbnail : `${BASE_PATH}${thumbnail}`;

/** Intrinsic size hints per thumbnail shape, so the browser reserves the right box. */
const THUMB_SIZE = {
  wide: { width: 640, height: 360 },
  cover: { width: 630, height: 500 },
  banner: { width: 1200, height: 500 },
} as const;

const ARTICLE_CLASS: Record<CardLayout, string> = {
  stacked: "",
  split: "col-span-full md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]",
  banner: "col-span-full",
};

const BODY_CLASS: Record<CardLayout, string> = {
  stacked: "sm:p-6",
  split: "sm:p-8 md:justify-center",
  banner: "sm:p-8 md:flex-row md:items-end md:justify-between md:gap-10",
};

/*
 * The whole card is one click target: the primary action's ::after stretches
 * over the card (see ProjectCard.css), so there is a single tab stop per
 * destination. Supporting links sit above that overlay with their own targets.
 */
const ProjectCard = ({ project }: ProjectCardProps) => {
  const headingId = useId();
  const featured = project.featured === true;
  const shape = project.thumbnailShape ?? "wide";
  const layout: CardLayout = !featured ? "stacked" : shape === "banner" ? "banner" : "split";

  // Each shape keeps its own ratio: itch.io covers (315:250) and banners (12:5)
  // often carry lettering near the edges, so they are shown whole, not cropped.
  const thumbClass =
    layout === "split"
      ? "aspect-video md:relative md:aspect-auto md:min-h-80 md:border-r md:border-b-0"
      : shape === "banner"
        ? "aspect-[12/5]"
        : shape === "cover"
          ? "aspect-[315/250]"
          : "aspect-video";

  return (
    <article
      aria-labelledby={headingId}
      className={`project-card relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-divider bg-raised ${ARTICLE_CLASS[layout]}`}
    >
      <div className={`overflow-hidden border-b border-divider bg-divider/40 ${thumbClass}`}>
        <img
          src={resolveThumbnail(project.thumbnail)}
          alt=""
          {...THUMB_SIZE[shape]}
          loading={featured ? "eager" : "lazy"}
          className={`size-full object-cover ${layout === "split" ? "md:absolute md:inset-0" : ""}`}
        />
      </div>

      <div className={`flex flex-1 flex-col p-5 ${BODY_CLASS[layout]}`}>
        <div className={layout === "banner" ? "max-w-prose" : ""}>
          <p className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-accent uppercase">
            {project.category}
            {featured && (
              <span className="rounded-full bg-accent/10 px-2 py-0.5 tracking-wide normal-case">
                Featured
              </span>
            )}
            {project.price && (
              <span className="rounded-full bg-accent/10 px-2 py-0.5 tracking-wide normal-case">
                {project.price}
              </span>
            )}
          </p>
          <h3
            id={headingId}
            className={`mt-2 font-bold tracking-tight text-foreground ${
              featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p className={`mt-2 leading-relaxed text-muted ${featured ? "sm:text-lg" : "text-sm"}`}>
            {project.description}
          </p>
        </div>

        <div
          className={`mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 pt-6 ${
            layout === "banner" ? "md:shrink-0 md:pt-0" : ""
          }`}
        >
          <a
            href={project.primaryAction.href}
            aria-label={`${project.primaryAction.label}: ${project.title}`}
            className="project-card__primary inline-flex min-h-11 items-center gap-2 rounded-full border border-accent px-4 text-sm font-semibold text-accent"
          >
            {project.primaryAction.label}
            <span aria-hidden="true" className="project-card__arrow">
              ↗
            </span>
          </a>
          {project.supportingActions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              aria-label={`${action.label}: ${project.title}`}
              className="relative z-10 inline-flex min-h-11 items-center text-sm text-muted underline decoration-divider underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
