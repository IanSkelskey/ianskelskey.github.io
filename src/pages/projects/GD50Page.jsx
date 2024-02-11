import IconButton from "../../components/atoms/IconButton";
import BigTitleQuotePictureSection from "../../components/layout/BigTitleQuotePictureSection";
import Page from "../../components/layout/Page";
import YouTubeVideo from "../../components/media/YouTubeVideo";
import projects from "../../data/projects";

export default function GD50Page() {
  const gd50Project = projects.find(
    (project) => project.title === "GD50: Intro to Game Development"
  );
  return (
    <Page>
      <BigTitleQuotePictureSection
        title={gd50Project.title}
        icon={gd50Project.icon}
        subtitle={gd50Project.subtitle}
        quote={gd50Project.pageBlurb}
        image={gd50Project.thumbnail}
        imageAlt={gd50Project.title + " thumbnail"}
      >
        <p className="text-sm subtle-text">
          The code can be found on GitHub.
        </p>
        <div className="flex gap-4 flex-wrap text-sm">
          <IconButton
            onClick={() => {
              window.open(gd50Project.github, "_blank");
            }}
            icon="github"
            text="View on GitHub"
            className="bg-neutral-700 rounded-md text-white w-fit"
          />
        </div>
      </BigTitleQuotePictureSection>

      <div className="w-full flex md:items-start gap-6 md:flex-row flex-col items-center px-4">
        <YouTubeVideo id="RxwTPHQn6Cc?si=VhSbSRG9-68OZI-2" className="md:w-1/2 w-full max-w-2xl aspect-[16/9]" title="GD50 Assignment 0: Pong" />
        <div className="flex flex-col gap-4 flex-grow">
          <h2 className="text-2xl">🏓 Pong</h2>
          <p>
            This project adds AI to the classic Pong game, allowing single-player mode by automating paddle movements in response to the ball. It requires modifying the game code to shift from keyboard-controlled to AI-controlled paddles.
          </p>
        </div>
      </div>
      <div className="w-full flex md:items-start gap-6 md:flex-row-reverse flex-col items-center px-4">
        <YouTubeVideo id="WDggad8ArJ8" className="md:w-1/2 w-full max-w-2xl aspect-[16/9]" title="GD50 Assignment 1: Flappy Bird" />
        <div className="flex flex-col gap-4 flex-grow">
          <h2 className="text-2xl">🐦 Flappy Bird</h2>
          <p>
            This project updates Flappy Bird to include dynamic levels and new features. Key enhancements involve randomizing pipe gaps and spawn intervals for varied gameplay, awarding medals for high scores, and adding a pause function for interruptions. These changes require understanding the original code, tweaking game mechanics for challenge, and implementing visual and audio feedback for player actions.
          </p>
        </div>
      </div>
      <div className="w-full flex md:items-start gap-6 md:flex-row flex-col items-center px-4">
        <YouTubeVideo id="FTwQ3LYJrfM" className="md:w-1/2 w-full max-w-2xl aspect-[16/9]" title="GD50 Assignment 2: Breakout" />
        <div className="flex flex-col gap-4 flex-grow">
          <h2 className="text-2xl">🧱 Breakout</h2>
          <p>
            This Breakout project introduces power-ups that spawn additional balls and dynamically adjust the paddle's size based on scores and lives lost, adding strategic depth. A new locked Brick and a key power-up, required to unlock it, bring complexity and encourage exploration. Players must navigate these enhancements, balancing the challenge of multiple balls and the tactical use of paddle adjustments.
          </p>
        </div>
      </div>
    </Page>
  );
}
