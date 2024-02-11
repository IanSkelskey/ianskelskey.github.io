import Badge from "../../components/atoms/Badge";
import IconButton from "../../components/atoms/IconButton";
import BigTitleQuotePictureSection from "../../components/layout/BigTitleQuotePictureSection";
import Page from "../../components/layout/Page";
import TitleIconSection from "../../components/layout/TitleIconSection";
import projects from "../../data/projects";
import { motion } from "framer-motion";

export default function FieldDayPage() {
  const fieldDayProject = projects.find(
    (project) => project.title === "Field Day"
  );
  return (
    <Page>
      <BigTitleQuotePictureSection
        title={fieldDayProject.title}
        icon={fieldDayProject.icon}
        subtitle={fieldDayProject.subtitle}
        quote={fieldDayProject.pageBlurb}
        image={fieldDayProject.thumbnail}
        imageAlt={fieldDayProject.title + " thumbnail"}
      >

        <p className="text-sm subtle-text">The code can be found in the GitHub organization. Both the PWA and Web UI are live, but use Google authentication and require asu email address to enter.</p>
        <div className="flex gap-4 flex-wrap text-sm">
          <IconButton
            onClick={() =>
              window.open(fieldDayProject.github, "_blank")
            }
            icon="github"
            text="View on GitHub"
            className="bg-neutral-700 rounded-md text-white w-fit"
          />

          <IconButton
            onClick={
              () => window.open(fieldDayProject.pwaUrl, "_blank")
            }
            icon="mobile"
            text="View PWA"
            className="bg-asu-maroon rounded-md text-white w-fit"
          />

          <IconButton
            onClick={
              () => window.open(fieldDayProject.webUiUrl, "_blank")
            }
            icon="desktop"
            text="View Web UI"
            className="bg-asu-gold rounded-md text-black w-fit"
          />
        </div>
      </BigTitleQuotePictureSection>
      <motion.img src="/assets/projects/fieldday/field-day-web-ui-mockup.png" alt="Field Day webui mockup" className="max-w-screen-2xl" whileHover={{ scale: 1.05 }} />
      <motion.img src="/assets/projects/fieldday/field-day-pwa-mockup.png" alt="Field Day pwa mockup" className="max-w-lg" whileHover={{ scale: 1.05 }} />

      <TitleIconSection
        title="Overview"
        iconName="fieldDay"
      >
        <p>
          {fieldDayProject.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {fieldDayProject.skills.map((skill) => (
            <Badge
              key={skill.name}
              iconName={skill.icon}
              text={skill.name}
              color={skill.color}
            />
          ))}
        </div>
      </TitleIconSection>
    </Page>
  );
}
