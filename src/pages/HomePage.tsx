import ProjectGallery from "../components/projects/ProjectGallery";
import { projects } from "../data/projects";
import useDocumentTitle from "../hooks/useDocumentTitle";

const HomePage = () => {
  useDocumentTitle("Demos & tools");
  return (
    <section aria-labelledby="home-heading" className="flex flex-col gap-10">
      <div>
        <h1
          id="home-heading"
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          Demos & tools
        </h1>
        <p className="mt-4 max-w-prose text-lg text-muted">
          Browser apps and reusable templates. Pick something to try.
        </p>
      </div>
      <ProjectGallery projects={projects} />
    </section>
  );
};

export default HomePage;
