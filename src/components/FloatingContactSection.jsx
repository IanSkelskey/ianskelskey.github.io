import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocation, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FloatingContactSection() {
    return (
        <div className="flex flex-col w-96 h-full space-y-3 bg-black rounded-2xl p-6 items-center relative">
            <img src="/assets/headshot.png" className="absolute -top-32 rounded-full w-36 h-36" alt="Ian Skelskey's headshot" />
            <h1 className="text-2xl text-white font-serif font-bold">Ian Skelskey</h1>
            <p className="text-sm text-neutral-400 bg-neutral-800 p-2 rounded-md">B.S. Software Engineering</p>
            <div className="flex items-center space-x-3">
                <SocialIconLink icon={faGithub} href="https://github.com/ianskelskey" />
                <SocialIconLink icon={faLinkedin} href="https://www.linkedin.com/in/ianskelskey/" />
            </div>
            <ul className="flex flex-col space-y-2 divide-y-2 divide-neutral-600 p-3 bg-neutral-800 rounded-md w-full">
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
            <FontAwesomeIcon icon={icon} className="text-neutral-400 text-xl p-2 bg-neutral-800 rounded-md" />
        </a>
    );
}

function ContactListItem({ icon, tite, content }) {
    return (
        <li className="flex space-x-3 items-center py-2">
            <FontAwesomeIcon icon={icon} className="text-neutral-400 text-xl" />
            <div className="flex flex-col">
                <div className="text-neutral-400 text-sm">{tite}</div>
                <div className="text-white text-sm">{content}</div>
            </div>
        </li>
    );
}