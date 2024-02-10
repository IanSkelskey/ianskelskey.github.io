import IconButton from "../../components/atoms/IconButton";
import BigTitleQuotePictureSection from "../../components/layout/BigTitleQuotePictureSection";
import Page from "../../components/layout/Page";
import SpotifyPlayer from "../../components/media/SpotifyPlayer";
import projects from "../../data/projects";

export default function MasksOfMalikPage() {
    const masksOfMalikProject = projects.find(
        (project) => project.title === "Masks of Malik Minecraft Mod"
    );

    return (
        <Page>
            <BigTitleQuotePictureSection
                title={masksOfMalikProject.title}
                icon={masksOfMalikProject.icon}
                subtitle={masksOfMalikProject.subtitle}
                quote={masksOfMalikProject.pageBlurb}
                image={masksOfMalikProject.thumbnail}
                imageAlt={masksOfMalikProject.title + " thumbnail"}
            >
                <p className="text-sm subtle-text">
                    The code can be found on GitHub.
                </p>
                <div className="flex gap-4 flex-wrap text-sm">
                    <a
                        href={masksOfMalikProject.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconButton
                            icon="github"
                            text="View on GitHub"
                            className="bg-neutral-700 rounded-md text-white w-fit"
                        />
                    </a>
                </div>
            </BigTitleQuotePictureSection>
            <SpotifyPlayer id="5qJkijS1URdFwUFSENoLzO" type="track" className="w-full" title="Masks of Malik Theme" />
        </Page>
    );
}