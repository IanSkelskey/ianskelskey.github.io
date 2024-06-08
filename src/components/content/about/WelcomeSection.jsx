import { Link } from "react-router-dom";
import IconButton from "../../atoms/IconButton";
import BigTitleQuotePictureSection from "../../layout/BigTitleQuotePictureSection";

export default function WelcomeSection() {
    return (
        <BigTitleQuotePictureSection
            title="Ian Skelskey"
            subtitle="Software Engineer"
            quote="I'm a software engineer and creative living in Connecticut. My background is in mathematics, computer science, and software engineering. I've always had a strong interest in video games, leading me to explore game design and development. Right now, I'm focused on creating games using Love2D and Lua, as well as web apps with React. I'm looking to join a company that values creativity and innovation. I hope you find my portfolio engaging and reflective of my skills."
            image="assets/casual-photo.webp"
            imageAlt="Ian Skelskey in the San Francisco Bay area">
            <div className="flex flex-row gap-4">
                <Link to="/projects">
                    <IconButton
                        icon="projects"
                        text="View Projects"
                        className="bg-theme-blue rounded-md text-white"
                    />
                </Link>
                <Link to="/resume">
                    <IconButton
                        icon="resume"
                        text="View Resume"
                        className="bg-neutral-700 rounded-md text-white"
                    />
                </Link>
            </div>
        </BigTitleQuotePictureSection>
    );
}
