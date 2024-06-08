import techStack from "../../../data/techStack";
import Badge from "../../atoms/Badge";
import IconButton from "../../atoms/IconButton";
import TitleIconSection from "../../layout/TitleIconSection";

export default function TechStackSection() {
  return (
    <TitleIconSection title="This Portfolio's Tech Stack" iconName="stack">
      <p>This portfolio was built using the following technologies:</p>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <Badge
            key={tech.name}
            text={tech.name}
            iconName={tech.icon}
            color={tech.color}
          />
        ))}
      </div>
      <p>
        I would like for other developers to review my code. I want to get
        better at writing clean, readable code, and I want to learn more about
        React. If you have any suggestions for improvements, please feel free to
        open an issue. I would also appreciate any feedback on my design and
        code.
      </p>
      <p>Check out the source code on my GitHub repository!</p>
      <div className="flex flex-row gap-4">
        <IconButton
          text="View Source"
          icon="github"
          onClick={() =>
            window.open(
              "https://github.com/ianskelskey/ianskelskey.github.io", "_blank"
            )
          }
          className="bg-theme-blue rounded-md text-white w-fit"
        />
        <IconButton
          text="Report Issue"
          icon="bug"
          onClick={
            () => window.open(
              "https://github.com/IanSkelskey/ianskelskey.github.io/issues/new/choose", "_blank"
            )
          }
          className="bg-neutral-700  rounded-md text-white w-fit"
        />
      </div>
    </TitleIconSection>
  );
}
