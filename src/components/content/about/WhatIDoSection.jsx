import IconTitleDescriptionSmallCard from "../../atoms/IconTitleDescriptionSmallCard";
import professionalInterests from "../../../data/professionalInterests";
import SubSection from "../../layout/SubSection";

export default function WhatIDoSection() {
  return (
    <SubSection title="What I do!">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-4">
        {professionalInterests.map((thing) => (
          <IconTitleDescriptionSmallCard
            key={thing.title}
            title={thing.title}
            description={thing.description}
            iconName={thing.icon}
            accentColor={thing.accentColor}
          />
        ))}
      </div>
    </SubSection>
  );
}
