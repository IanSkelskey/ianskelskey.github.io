import IconButton from "../atoms/IconButton";

export default function WelcomeSection() {
    return (
        <div className="flex flex-col xl:flex-row items-center gap-12">
            <div className="flex flex-col gap-6 flex-1">
                <h1 className="text-5xl font-serif font-bold">Ian Skelskey</h1>
                <p className="text-2xl subtle-text">Software Engineer</p>
                <blockquote className="italic border-l-4 border-theme-blue pl-4">
                    I'm a software engineer and creative living in Connecticut. My background is in mathematics, computer science, and software engineering.
                    I've always had a strong interest in video games, leading me to explore game design and development.
                    Right now, I'm focused on creating games using Love2D and Lua, as well as web apps with React. I'm looking to join a company that values creativity and innovation.
                    I hope you find my portfolio engaging and reflective of my skills.
                </blockquote>
                <div className="flex flex-row gap-6">
                    <IconButton icon="projects" text="View Projects" className="bg-theme-blue rounded-md font-bold text-white" />
                    <IconButton icon="resume" text="View Resume" className="bg-neutral-700 rounded-md font-bold text-white" />
                </div>
            </div>
            <img src="assets/casual-photo.jpeg" alt="Ian Skelskey in the San Francisco Bay area" className="grayscale opacity-90 2xl:w-114 xl:w-96" />
        </div>
    )
}