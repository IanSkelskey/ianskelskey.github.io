import IconTitleCard from "../../atoms/IconTitleCard";
import professionalInterests from "../../../data/professionalInterests";
import TitleIconSection from "../../layout/TitleIconSection";

export default function WhatIDoSection() {
  return (
    <TitleIconSection title="What I do!">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-4">
        {professionalInterests.map((thing) => (
          <IconTitleCard
            key={thing.title}
            title={thing.title}
            iconName={thing.icon}
            accentColor={thing.accentColor}
          >
            <p>{thing.description}</p>

          </IconTitleCard>
        ))}
      </div>
    </TitleIconSection>
  );
}
