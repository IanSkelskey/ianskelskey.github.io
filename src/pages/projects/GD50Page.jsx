import IconButton from "../../components/atoms/IconButton";
import BigTitleQuotePictureSection from "../../components/layout/BigTitleQuotePictureSection";
import Page from "../../components/layout/Page";
import TitleIconSection from "../../components/layout/TitleIconSection";
import projects from "../../data/projects";

export default function GD50Page() {
  const gd50Project = projects.find(
    (project) => project.title === "GD50: Intro to Game Development"
  );
  return (
    <Page>
      <BigTitleQuotePictureSection
        title={gd50Project.title}
        icon={gd50Project.icon}
        subtitle={gd50Project.subtitle}
        quote={gd50Project.pageBlurb}
        image={gd50Project.thumbnail}
        imageAlt={gd50Project.title + " thumbnail"}
      >
        <p className="text-sm subtle-text">
          The code can be found on GitHub.
        </p>
        <div className="flex gap-4 flex-wrap text-sm">
          <a
            href={gd50Project.github}
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              icon="github"
              text="View on GitHub"
              className="bg-neutral-700 rounded-md text-white w-fit"
            />
          </a>
        </div>
      </BigTitleQuotePictureSection>
      <TitleIconSection title="Pong" iconName="video">
        <iframe
          className="w-full max-w-2xl aspect-[16/9]"
          src="https://www.youtube.com/embed/RxwTPHQn6Cc?si=VhSbSRG9-68OZI-2"
          title="GD50 Assignment 0: Pong"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </TitleIconSection>
      <TitleIconSection title="Flappy Bird" iconName="video">
      <iframe
        className="w-full max-w-2xl aspect-[16/9]"
        src="https://www.youtube.com/embed/WDggad8ArJ8?si=VhSbSRG9-68OZI-2"
        title="GD50 Assignment 1: Flappy Bird"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </TitleIconSection>
      <TitleIconSection title="Breakout" iconName="video">
      <iframe
        className="w-full max-w-2xl aspect-[16/9]"
        src="https://www.youtube.com/embed/FTwQ3LYJrfM?si=VhSbSRG9-68OZI-2"
        title="GD50 Assignment 2: Breakout"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </TitleIconSection>
    </Page>
  );
}
