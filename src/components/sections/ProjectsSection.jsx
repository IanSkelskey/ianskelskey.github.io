import ContentRow from "../layout/ContentRow";
import Section from "../layout/Section";
import SubSection from "../layout/SubSection";
import ThumbnailTitleSubtitleSmallCard from "../layout/ThumbnailTitleSubtitleSmalLCard";

export default function ProjectsSection() {
    return (
        <Section title="Projects">
            <ContentRow>
                <SubSection>
                    <p className="subtle-text">
                        I have worked on a variety of projects, including:
                    </p>
                </SubSection>
            </ContentRow>
            <ContentRow>
                <SubSection>
                    <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        <ThumbnailTitleSubtitleSmallCard title="Ocarina of Time Retexture" subtitle="Personal Project" thumbnail="/assets/zelda-screenshot-2.png">
                            <p>
                                I was part of a team that worked on the community-driven retexturing project for Zelda Ocarina of Time, specifically "Zelda Ocarina of Time Community Retexture V7". My contributions include designing menus and HUD elements.
                            </p>
                        </ThumbnailTitleSubtitleSmallCard>
                        <ThumbnailTitleSubtitleSmallCard title="Toy Drive" subtitle="Personal Project" thumbnail="/assets/toy-drive.png">
                            <p>
                                I created a website for a local charity event that I helped organize. The website was used to collect donations and provide information about the event.
                            </p>
                        </ThumbnailTitleSubtitleSmallCard>
                        <ThumbnailTitleSubtitleSmallCard title="Field Day" subtitle="ASU Capstone Project" thumbnail="/assets/field-day.png">
                            <p>
                                I'm actively maintaining the Field Day Project, a comprehensive data collection and management tool geared towards aiding wildlife researchers and conservationists in Arizona. Dr. Heather Bateman, a biology professor at ASU, sponsors the project. The tech stack for this project includes JavaScript, React, Tailwind, Firestore, Firebase, and Framer Motion.
                            </p>
                        </ThumbnailTitleSubtitleSmallCard>
                    </div>
                </SubSection>
            </ContentRow>
        </Section>
    );
}