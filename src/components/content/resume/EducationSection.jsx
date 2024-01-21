import CVSection from "../../layout/CVSection";

export default function EducationSection({ educationItems }) {
  return (
    <CVSection title="Education">
      {educationItems.map((item) => (
        <div key={item.title} className="flex flex-col gap-2">
          <p className="subltle-text italic">
            {item.title + " | " + item.location + " | " + item.date}
          </p>
        </div>
      ))}
    </CVSection>
  );
}
