import education from "./education";
import experience from "./experience";
import languages from "./languages";
import projects from "./projects";

const personalData = {
    name: "Ian Skelskey",
    title: "Full Stack Software Developer",
    bioFull: "I am a full stack software developer with a background in mathematics and computer science. I have a passion for building products that are intuitive, easy to use, and fun. I am currently looking for a software engineering position that will allow me to continue to grow as a developer and learn new technologies.",
    bioShort: "I am a full stack software developer with a background in mathematics and computer science. I have a passion for building products that are intuitive, easy to use, and fun.",
    imageLight: "assets/headshot-light.png",
    imageDark: "assets/headshot.png",
    experience: experience,
    education: education,
    projects: projects,
    languages: languages,
    contact: [
        {
            icon: "phone",
            title: "Phone",
            content: "860-830-5595",
            link: "tel:860-830-5595",
        },
        {
            icon: "email",
            title: "Email",
            content: "ianskelskey@gmail.com",
            link: "mailto:ianskelskey@gmail.com",
        },
        {
            icon: "location",
            title: "Location",
            content: "Connecticut, USA",
            link: "https://maps.app.goo.gl/wUNJHiy2tqgC1Zqk8",
        },
    ],
    socials: [
        {
            name: "Github",
            icon: "github",
            link: "https://github.com/IanSkelskey",
        },
        {
            name: "LinkedIn",
            icon: "linkedin",
            link: "https://www.linkedin.com/in/ian-skelskey/",
        },
        {
            name: "YouTube",
            icon: "youtube",
            link: "https://www.youtube.com/channel/UC3y2Vd1vRFrihBkgaYfJ7xw",
        }
    ]
};

export default personalData;