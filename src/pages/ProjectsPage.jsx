import SubSection from "../components/layout/SubSection";
import ThumbnailTitleSubtitleSmallCard from "../components/atoms/ThumbnailTitleSubtitleSmallCard";
import Page from "../components/layout/Page";

export default function ProjectsPage() {
  const blurb = "Here are some of the projects I've worked on.";
  return (
    <Page title="Projects" blurb={blurb}>

      <SubSection>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-6">
          <ThumbnailTitleSubtitleSmallCard
            title="Ocarina of Time Retexture"
            subtitle="Personal Project"
            thumbnail="/assets/zelda-screenshot-2.png"
          >
            <p>
              I was part of a team that worked on the community-driven
              retexturing project for Zelda Ocarina of Time, specifically
              "Zelda Ocarina of Time Community Retexture V7". My contributions
              include designing menus and HUD elements.
            </p>
          </ThumbnailTitleSubtitleSmallCard>
          <ThumbnailTitleSubtitleSmallCard
            title="Toy Drive"
            subtitle="Personal Project"
            thumbnail="/assets/toy-drive.png"
          >
            <p>
              I created a website for a local charity event that I helped
              organize. The website was used to collect donations and provide
              information about the event.
            </p>
          </ThumbnailTitleSubtitleSmallCard>
          <ThumbnailTitleSubtitleSmallCard
            title="Field Day"
            subtitle="ASU Capstone Project"
            thumbnail="/assets/field-day.png"
          >
            <p>
              I'm actively maintaining the Field Day Project, a comprehensive
              data collection and management tool geared towards aiding
              wildlife researchers and conservationists in Arizona. Dr.
              Heather Bateman, a biology professor at ASU, sponsors the
              project. The tech stack for this project includes JavaScript,
              React, Tailwind, Firestore, Firebase, and Framer Motion.
            </p>
          </ThumbnailTitleSubtitleSmallCard>
          <ThumbnailTitleSubtitleSmallCard
            title="GD50: Intro to Game Development"
            subtitle="edX/Harvard Course"
            thumbnail="/assets/gd50.png"
          >
            <p>
              I'm currently working on the GD50: Intro to Game Development
              course through edX and Harvard. I'm learning how to use Lua and
              Love2D to create games. I'm also learning about game design and
              development.
            </p>
          </ThumbnailTitleSubtitleSmallCard>
        </div>
      </SubSection>
    </Page>

  );
}
