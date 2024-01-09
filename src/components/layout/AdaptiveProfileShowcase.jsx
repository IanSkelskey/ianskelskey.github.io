import { faCss3Alt, faGithubAlt, faHtml5, faReact, faSquareFontAwesome } from "@fortawesome/free-brands-svg-icons";
import Badge from "../atoms/Badge";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function AdaptiveProfileShowcase({ profileSection, navSection, children }) {
    return (
        <div className="min-h-screen flex flex-col w-full md:p-12 p-6 max-w-screen-3xl mx-auto">
            <div className='flex md:flex-row flex-col w-full md:space-x-6 space-y-6'>
                <div className='h-fit md:w-96 w-full'>
                    {profileSection}
                </div>
                <div className='flex flex-0 flex-col md:pt-14 w-full'>
                    <div className='flex md:justify-end justify-center'>
                        {navSection}
                    </div>
                    <div className="w-full content-card">
                        {children}
                        <footer className="flex flex-col space-y-2 justify-center items-center py-6 dark:bg-neutral-900 bg-neutral-150 rounded-b-2xl">
                            <p>
                                Made with:
                            </p>
                            <div className="flex flex-row space-x-4 gap-2 flex-wrap justify-center">
                                <Badge icon={faReact} text="React" bgColorClass="bg-blue-600 rounded-md w-fit" />
                                <Badge icon={faHtml5} text="HTML5" bgColorClass="bg-red-600 rounded-md w-fit" />
                                <Badge icon={faCss3Alt} text="CSS3" bgColorClass="bg-green-600 rounded-md w-fit" />
                                <Badge icon={faSquareFontAwesome} text="FontAwesome" bgColorClass="bg-yellow-600 rounded-md w-fit" />
                                <Badge icon={faGithubAlt} text="Github Pages" bgColorClass="bg-gray-600 rounded-md w-fit" />
                                <Badge icon={faHeart} text="Love" bgColorClass="bg-pink-500 rounded-md w-fit" />
                            </div>
                            <p>
                                © 2024 Ian Skelskey. All rights reserved.
                            </p>

                        </footer>
                    </div>
                </div>
            </div>

        </div>
    )
}