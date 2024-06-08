import IconButton from "../../components/atoms/IconButton";
import BigTitleQuotePictureSection from "../../components/layout/BigTitleQuotePictureSection";
import projects from "../../data/projects";
import Page from "../../components/layout/Page";
import TitleIconSection from "../../components/layout/TitleIconSection";

export default function ToyDrivePage() {
  const toyDriveProject = projects.find(
    (project) => project.title === "Community Toy Drive"
  );
  return (
    <Page>
      <BigTitleQuotePictureSection
        title={toyDriveProject.title}
        icon={toyDriveProject.icon}
        subtitle={toyDriveProject.subtitle}
        quote={toyDriveProject.pageBlurb}
        image={toyDriveProject.thumbnail}
        imageAlt={toyDriveProject.title + " thumbnail"}
      >
        <p className="text-sm subtle-text">
          The code can be found on GitHub and the website is live.
        </p>
        <div className="flex gap-4 flex-wrap text-sm">
          <IconButton
            onClick={
              () => window.open(toyDriveProject.github, "_blank")
            }
            icon="github"
            text="View on GitHub"
            className="bg-neutral-700 rounded-md text-white w-fit"
          />
          <IconButton
            onClick={
              () => window.open(toyDriveProject.deploymentUrl, "_blank")
            }
            icon="rocket"
            text="View Deployment"
            className="bg-theme-blue rounded-md text-white w-fit"
          />
        </div>
      </BigTitleQuotePictureSection>
      <TitleIconSection title="The Problem" iconName="exclamation">
        <h4 className="text-lg">Lack of Support</h4>
        <p>
          One of the challenges that we faced in 2023 was a lack of corporate support. The toy drive started as a partnership between
          Connecticut Children's Medical Center and Starbucks (Where I worked at the time). At that time we were provided official posters,
          and a list of suggested toys. However, in 2023, official marketing materials were not provided.
        </p>
        <h4 className="text-lg">Stagnating Donations</h4>
        <p>
          Another challenge was that the toy drive was not growing. We saw growth in the first few years, but it became clear recently that
          with only one location for donations, we were not reaching our full potential.
        </p>
        <h4 className="text-lg">Scattered Online Presence</h4>
        <p>
          The toy drive had a scattered online presence. There was no central location for information about the toy drive.
        </p>
      </TitleIconSection>

      <TitleIconSection title="The Solution" iconName="rocket">
        <h4 className="text-lg">Brand Identity & Marketing</h4>
        <p>
          I took it upon myself to create
          a poster and wishlist to help promote the toy drive. The assets and design of the posters actually ended up inspiring the website.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <img src="/assets/projects/toydrive/8x11_poster_2023.svg" alt="Toy Drive Poster" className="aspect-[8/11] md:w-1/2" />
          <img src="/assets/projects/toydrive/8x11_wishlist_2023.svg" alt="Toy Drive Poster" className="aspect-[8/11] md:w-1/2" />
        </div>
        <h4 className="text-lg">New Locations & Partners</h4>
        <h4 className="text-lg">Official Website</h4>
      </TitleIconSection>
    </Page>
  );
}