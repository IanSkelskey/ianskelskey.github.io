import SmallCard from "./SmallCard";
import { faLaptopCode, faSchool, faCode } from "@fortawesome/free-solid-svg-icons";


export default function AboutSection() {
    return (
        <div className="flex flex-col w-full h-full space-y-6">
            <p className="subtle-text pr-12 text-justify">
                I'm Ian Skelskey, a passionate full-stack software engineer specializing in front-end technologies. With expertise in React and Tailwind CSS, my focus is on crafting intuitive and effective software solutions. As a Professional Tutor and SI Leader, I've honed my skills in HTML, CSS, JavaScript, and complex networking concepts. Explore my portfolio to see how I blend technical skill with creativity in the dynamic world of software development.
            </p>
            <h2 className="text-2xl">What I do!</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                <SmallCard
                    title="Full-Stack Development"
                    description="I am a full-stack software engineer with a passion for creating intuitive and effective software solutions. I specialize in front-end technologies, including React and Tailwind CSS."
                    icon={faLaptopCode}
                    accentColor="blue" />
                <SmallCard
                    title="Professional Tutor"
                    description="I am a professional tutor with a passion for teaching and learning. I have been a tutor for over 10 years, and I have experience tutoring a wide variety of subjects, including computer science, mathematics, and physics."
                    icon={faSchool} 
                    accentColor="yellow" />
                <SmallCard
                    title="SI Leader"
                    description="I was an SI Leader for SER321: Distributed Software Systems at Arizona State University. I led weekly study sessions and helped students understand the course material."
                    icon={faSchool}
                    accentColor="green" />
                <SmallCard
                    title="Web Design"
                    description="I am a web designer with a passion for designing intuitive and effective web solutions. I specialize in front-end technologies, including React and Tailwind CSS."
                    icon={faCode}
                    accentColor="red" />
            </div>
        </div>
    );
}
