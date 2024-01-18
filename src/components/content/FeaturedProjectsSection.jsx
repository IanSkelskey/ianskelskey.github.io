import projects from "../../data/projects";
import ThumbnailTitleSubtitleSmallCard from "../atoms/ThumbnailTitleSubtitleSmallCard";
import SubSection from "../layout/SubSection";

export default function FeaturedProjectsSection() {
  return (
    <SubSection title="Featured Projects" iconName="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-6">
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
    </SubSection>
  );
}
