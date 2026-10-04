import ProjectGallery from "../components/projects/ProjectGallery";
import { assetPackCards } from "../data/assetPacks";
import { projects } from "../data/projects";
import useDocumentTitle from "../hooks/useDocumentTitle";

const HomePage = () => {
  useDocumentTitle("Demos & tools");
  return (
    <div className="flex flex-col gap-16">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Demos & tools
        </h1>
        <p className="mt-4 max-w-prose text-lg text-muted">
          Browser apps, reusable templates, and game asset packs. Pick something to try.
        </p>
      </div>

      <section aria-labelledby="projects-heading" className="flex flex-col gap-6">
        <h2 id="projects-heading" className="text-2xl font-bold tracking-tight text-foreground">
          Apps & templates
        </h2>
        <ProjectGallery projects={projects} />
      </section>

      <section aria-labelledby="assets-heading" className="flex flex-col gap-6">
        <div>
          <h2 id="assets-heading" className="text-2xl font-bold tracking-tight text-foreground">
            Asset packs
          </h2>
          <p className="mt-2 max-w-prose text-muted">
            Pixel art and UI assets for games and websites, published on{" "}
            <a
              href="https://ianskelskey.itch.io/"
              className="underline decoration-divider underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              itch.io
            </a>
            .
          </p>
        </div>
        <ProjectGallery projects={assetPackCards} compact />
      </section>
    </div>
  );
};

export default HomePage;
