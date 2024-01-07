import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocation, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FloatingContactSection() {
    return (
        <div className="large-card md:w-80 w-full flex-col h-full space-y-2 md:space-y-4 p-6 items-center relative md:top-31 flex">
            <div className="flex flex-col sm:flex-row md:flex-col items-center space-y-2 md:space-y-4 relative w-full space-x-0 sm:space-x-6 md:space-x-0">
                <div className="md:absolute md:-top-40 rounded-full w-40 h-40 dark:bg-[url('assets/headshot.png')] bg-[url('assets/headshot-light.png')] bg-cover" />
                <div className="flex flex-col items-center sm:items-start md:items-center space-y-2 md:space-y-4">
                    <h1 className="text-2xl font-serif font-bold">Ian Skelskey</h1>
                    <p className="text-sm subtle-text dark:bg-neutral-800 bg-neutral-200 p-2 rounded-md">B.S. Software Engineering</p>
                    <div className="flex items-center space-x-3">
                        <SocialIconLink icon={faGithub} href="https://github.com/ianskelskey" />
                        <SocialIconLink icon={faLinkedin} href="https://www.linkedin.com/in/ianskelskey/" />
                        <SocialIconLink icon={faYoutube} href="https://www.youtube.com/channel/UC3y2Vd1vRFrihBkgaYfJ7xw" />
                    </div>
                </div>

            </div>
            <ul className="grid grid-cols-2 place-items-center md:flex md:items-start items-center md:flex-col md:space-y-2 md:divide-x-0 divide-y-0 md:divide-y-2 dark:divide-neutral-600 divide-neutral-400 p-3 md:dark:bg-neutral-800 md:bg-neutral-200 rounded-md w-full">
                <div className="md:w-full col-span-2 sm:col-span-1">
                    <ContactListItem icon={faPhone} tite="Phone" content={<a href="tel:860-830-5595">860-830-5595</a>} />
                </div>
                <div className="md:w-full col-span-2 sm:col-span-1">
                    <ContactListItem icon={faEnvelope} tite="Email" content={<a href="mailto:ianskelskey@gmail.com">ianskelskey@gmail.com</a>} />
                </div>
                <div className="col-span-2 md:w-full">
                <ContactListItem icon={faLocation} tite="Location" content="Connecticut, USA" />
                </div>
            </ul>
            <button className="bg-blue-gradient rounded-full text-white px-3 py-2 flex space-x-3">
                <FontAwesomeIcon icon={faDownload} className="text-xl" />
                <p>
                    Download CV
                </p>
            </button>
        </div>
    );
}

function SocialIconLink({ icon, href }) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={icon} className="dark:text-neutral-400 text-neutral-600 text-xl p-2 dark:bg-neutral-800 bg-neutral-200 dark:hover:text-white hover:text-black rounded-md" />
        </a>
    );
}

function ContactListItem({ icon, tite, content }) {
    return (
        <li className="flex md:space-x-3 space-x-2 items-center text-center md:text-left py-1 sm:py-2 w-full">
            <FontAwesomeIcon icon={icon} className="px-2 dark:text-neutral-400 text-neutral-600 md:text-xl text-md" />
            <div className="flex flex-col w-full">
                <div className="dark:text-neutral-400 text-neutral-600 text-sm md:inline hidden">{tite}</div>
                <div className="text-sm">{content}</div>
            </div>
        </li>
    );
}