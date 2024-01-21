import CVSection from "../../layout/CVSection";

export default function ProjectsSection({ projectItems }) {
  return (
    <CVSection title="Projects">
      {projectItems.map((item) => (
        <div key={item.title} className="flex flex-col gap-2">
          <p className="subltle-text italic">
            {item.title + " | " + item.date}
          </p>
          <ul className="pl-5">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="subltle-text list-disc">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </CVSection>
  );
}
