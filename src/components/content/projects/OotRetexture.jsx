import SubSection from "../../layout/SubSection";

export default function OotRetexture() {
  return (
    <SubSection title="Ocarina of Time Community Retexture V7">
      <p className="subtle-text">
        I was part of a team that worked on the community-driven retexturing
        project for Zelda Ocarina of Time, specifically "Zelda Ocarina of Time
        Community Retexture V7". My contributions include designing menus and
        HUD elements.
      </p>
      <h3 className="text-xl">
        Demo Video by:{" "}
        <a href="https://www.youtube.com/@HydefHyde">Hydef Hyde</a>
      </h3>
      <iframe
        className="w-full max-w-2xl aspect-[16/9]"
        src="https://www.youtube.com/embed/ommmSq5YeXE?si=VhSbSRG9-68OZI-2"
        title="Ocarina of Time Community Retexture Demo Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </SubSection>
  );
}
