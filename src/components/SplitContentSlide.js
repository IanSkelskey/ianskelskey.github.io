export default function SplitContentSlide() {
    return (
        <div className="flex items-center p-10">
            <div className="flex-grow p-2 max-w-3xl">
                <p className="font-mono accent-text">Hello world!</p>
                <h1>I'm Ian Skelskey</h1>
                <blockquote className="py-10 border-l-8 border-l-theme-brown pl-4">I'm Ian Skelskey, a passionate full-stack software engineer specializing in front-end technologies. With expertise in React and Tailwind CSS, my focus is on crafting intuitive and effective software solutions. As a Professional Tutor and SI Leader, I've honed my skills in HTML, CSS, JavaScript, and complex networking concepts. Explore my portfolio to see how I blend technical skill with creativity in the dynamic world of software development.</blockquote>
                <button type="button" className="p-2 bg-theme-blue rounded-md text-theme-white">View my work</button>
            </div>
            <div className="flex-grow-0 p-2">
                <img src="/assets/headshot.png" alt="headshot" className="w-full rounded-3xl" />
            </div>
        </div>
    );
}