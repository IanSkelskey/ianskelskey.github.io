import BigTitleQuotePictureSection from "../../components/layout/BigTitleQuotePictureSection";
import Page from "../../components/layout/Page";
import TitleIconSection from "../../components/layout/TitleIconSection";
import projects from "../../data/projects";

export default function OotRetexturePage() {
  const ootRetextureProject = projects.find(
    (project) => project.title === "Ocarina of Time Retexture"
  );
  return (
    <Page>
      <BigTitleQuotePictureSection
        title={ootRetextureProject.title}
        icon={ootRetextureProject.icon}
        subtitle={ootRetextureProject.subtitle}
        quote={ootRetextureProject.pageBlurb}
        image={ootRetextureProject.thumbnail}
        imageAlt={ootRetextureProject.title + " thumbnail"}
      >

      </BigTitleQuotePictureSection>
      <TitleIconSection title="Demo Video" iconName="video">
        <h3 className="text-xl">
          Demo Video by:{" "}
          <a href="https://www.youtube.com/@HydefHyde">Hydef Hyde</a>
        </h3>
        <iframe
          className="w-full max-w-2xl aspect-[16/9]"
          src="https://www.youtube.com/embed/ommmSq5YeXE?si=VhSbSRG9-68OZI-2"
          title="Ocarina of Time Community Retexture Demo Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </TitleIconSection>
    </Page>
  );
}
