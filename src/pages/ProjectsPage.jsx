import SubSection from "../components/layout/SubSection";
import ThumbnailTitleSubtitleSmallCard from "../components/atoms/ThumbnailTitleSubtitleSmallCard";
import Page from "../components/layout/Page";
import projects from "../data/projects";

export default function ProjectsPage() {
  const blurb = "Here are some of the projects I've worked on.";
  return (
    <Page title="Projects" blurb={blurb}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ThumbnailTitleSubtitleSmallCard
            key={project.title}
            title={project.title}
            subtitle={project.category}
            thumbnail={project.thumbnail}
          >
            <p>{project.description}</p>
          </ThumbnailTitleSubtitleSmallCard>
        ))}
      </div>
    </Page>
  );
}
