import { faLaptopCode, faGamepad, faMusic, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import IconTitleDescriptionSmallCard from "../layout/IconTitleDescriptionSmallCard";

const thingsIDo = [
    {
        title: "Web Design",
        description: "I am a web designer with a passion for designing intuitive and effective web solutions. I specialize in front-end technologies, including React and Tailwind CSS.",
        icon: faLaptopCode,
        accentColor: "#f56565"
    },
    {
        title: "Game Development",
        description: "I'm a game developer with a passion for creating engaging and fun games. I specialize in Lua and Love2D, and am currently working on GD50: Intro to Game Development through edX and Harvard.",
        icon: faGamepad,
        accentColor: "#38b2ac"
    },
    {
        title: "Music",
        description: "I'm a musician with a passion for creating music. I like combining acoustic guitar with synths. I have been playing the piano for my whole life and guitar since I was 13. I also like to sing. I go out for karaoke now and then.",
        icon: faMusic,
        accentColor: "#9f7aea"
    },
    {
        title: "Art",
        description: "I'm a mostly self-taught artist with a passion for creating compelling designs. I am proficient with many Adobe Creative Cloud applications including Photoshop, Illustrator, and InDesign. I also have experience with Adobe After Effects and Premiere Pro.",
        icon: faPaintBrush,
        accentColor: "#ed64a6"
    }
];

export default function WhatIDoSection() {
    return (
        <section className="flex flex-col w-full h-full space-y-6">
            <h2 className="text-2xl">What I do!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-6">
                {thingsIDo.map(thing => (
                    <IconTitleDescriptionSmallCard
                        key={thing.title}
                        title={thing.title}
                        description={thing.description}
                        icon={thing.icon}
                        accentColor={thing.accentColor}
                    />
                ))}
            </div>
        </section>
    );
}
