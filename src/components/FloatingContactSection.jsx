import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocation, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FloatingContactSection() {
    return (
        <div className="large-card flex flex-col w-96 h-full space-y-4 p-6 items-center relative top-36">
            <div className="absolute -top-32 rounded-full w-36 h-36 dark:bg-[url('assets/headshot.png')] bg-[url('assets/headshot-light.png')] bg-cover" />
            <h1 className="text-2xl font-serif font-bold">Ian Skelskey</h1>
            <p className="text-sm subtle-text dark:bg-neutral-800 bg-neutral-200 p-2 rounded-md">B.S. Software Engineering</p>
            <div className="flex items-center space-x-3">
                <SocialIconLink icon={faGithub} href="https://github.com/ianskelskey" />
                <SocialIconLink icon={faLinkedin} href="https://www.linkedin.com/in/ianskelskey/" />
            </div>
            <ul className="flex flex-col space-y-2 divide-y-2 dark:divide-neutral-600 divide-neutral-400 p-3 dark:bg-neutral-800 bg-neutral-200 rounded-md w-full">
                <ContactListItem icon={faPhone} tite="Phone" content="(xxx) xxx-xxxx" />
                <ContactListItem icon={faEnvelope} tite="Email" content="ianskelskey@gmail.com" />
                <ContactListItem icon={faLocation} tite="Location" content="Connecticut, USA" />
            </ul>
            <button className="bg-gradient-to-r from-theme-blue to-theme-blue-light rounded-full text-white px-3 py-1 flex space-x-3">
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
            <FontAwesomeIcon icon={icon} className="dark:text-neutral-400 text-neutral-600 text-xl p-2 dark:bg-neutral-800 bg-neutral-200 rounded-md" />
        </a>
    );
}

function ContactListItem({ icon, tite, content }) {
    return (
        <li className="flex space-x-3 items-center py-2">
            <FontAwesomeIcon icon={icon} className="px-2 dark:text-neutral-400 text-neutral-600 text-xl" />
            <div className="flex flex-col">
                <div className="dark:text-neutral-400 text-neutral-600 text-sm">{tite}</div>
                <div className="text-sm">{content}</div>
            </div>
        </li>
    );
}