import CVSection from "../../layout/CVSection";

export default function ExperienceSection({ experienceItems }) {
  return (
    <CVSection title="Experience">
      {experienceItems.map((item) => (
        <div key={item.title} className="flex flex-col gap-2">
          <p className="subltle-text italic">
            {item.title +
              " | " +
              item.employer +
              " | " +
              item.location +
              " | " +
              item.date}
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
