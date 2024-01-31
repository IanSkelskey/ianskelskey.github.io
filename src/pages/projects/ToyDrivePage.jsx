import IconButton from "../../components/atoms/IconButton";
import BigTitleQuotePictureSection from "../../components/layout/BigTitleQuotePictureSection";
import Page from "../../components/layout/Page";
import projects from "../../data/projects";

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
          <a
            href={toyDriveProject.github}
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              icon="github"
              text="View on GitHub"
              className="bg-neutral-700 rounded-md text-white w-fit"
            />
          </a>
          <a
            href={toyDriveProject.deploymentUrl}
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              icon="rocket"
              text="View Deployment"
              className="bg-theme-blue rounded-md text-white w-fit"
            />
          </a>
        </div>
      </BigTitleQuotePictureSection>
    </Page>
  );
}
