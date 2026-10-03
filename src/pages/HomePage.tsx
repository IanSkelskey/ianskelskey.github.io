import ProjectGallery from "../components/projects/ProjectGallery";
import { projects } from "../data/projects";
import useDocumentTitle from "../hooks/useDocumentTitle";

const HomePage = () => {
  useDocumentTitle("Demos & tools");
  return (
    <section aria-labelledby="home-heading" className="flex flex-col gap-6">
      <div>
        <h1 id="home-heading" className="text-4xl font-bold text-foreground">
          Demos & tools
        </h1>
        <p className="mt-3 max-w-prose text-muted">
          Small applications and reusable templates you can explore, try, and build on.
        </p>
      </div>
      <ProjectGallery projects={projects} />
    </section>
  );
};

export default HomePage;
