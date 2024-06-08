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
      <TitleIconSection
        title="The Problem"
        iconName="exclamation"
      >
        <p>
          Field researchers encounter several challenges when collecting and analyzing wildlife population data, including human error during data collection, limited connectivity in remote areas,
          and high costs of maintaining a secure cloud database. These issues can compromise the accuracy of results and hinder scientific research.
        </p>
      </TitleIconSection>

      <TitleIconSection
        title="The Solution"
        iconName="rocket"
      >
        <p>
          To address these issues, the Field Day project employs innovative app design and cross-disciplinary
          collaboration to streamline data collection and analysis. The team focused on reducing
          deployment costs and enhancing user experience by migrating from Amazon Web Services
          to Firebase, which offers a free tier and is more cost-effective. The team also improved
          the Mobile App and Web App to better handle limited connectivity and enhance authentication
          security using 2-factor Google authentication. These changes have resulted in a more
          efficient, secure, and cost-effective user experience.
        </p>
        <h4 className="text-lg">Tech Stack</h4>
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
        <h4 className="text-lg">Desktop App</h4>
        <motion.img src="/assets/projects/fieldday/field-day-web-ui-mockup.webp" alt="Field Day webui mockup" className="max-w-3xl" whileHover={{ scale: 1.05 }} />
        <h4 className="text-lg">Mobile App</h4>
        <motion.img src="/assets/projects/fieldday/field-day-pwa-mockup.webp" alt="Field Day pwa mockup" className="max-w-md" whileHover={{ scale: 1.05 }} />
        <h4 className="text-lg">The Team</h4>
        <ul className="flex justify-around flex-wrap gap-4">
          <li>
              <div className="flex flex-col gap-4 items-center">
                <div className="w-20 h-20 rounded-full bg-gray-300"></div>
                <p className="text-sm">Ian Skelskey</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-4 items-center">
                <div className="w-20 h-20 rounded-full bg-gray-300"></div>
                <p className="text-sm">Isaiah Lathem</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-4 items-center">
                <div className="w-20 h-20 rounded-full bg-gray-300"></div>
                <p className="text-sm">Zachary Jacobson</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-4 items-center">
                <div className="w-20 h-20 rounded-full bg-gray-300"></div>
                <p className="text-sm">Jack Norman</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-4 items-center">
                <div className="w-20 h-20 rounded-full bg-gray-300"></div>
                <p className="text-sm">Dennis Grassl</p>
              </div>
            </li>
        </ul>
      </TitleIconSection>
    </Page>
  );
}
