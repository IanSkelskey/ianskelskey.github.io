import { faFile, faBriefcase, faAddressBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
    return (
        <nav className="bg-black rounded-2xl p-6 w-1/2">
            <ul className="flex space-x-6">
                <NavItem icon={faUser} title="About" active={true} />
                <NavItem icon={faFile} title="Resume" />
                <NavItem icon={faBriefcase} title="Projects" />
                <NavItem icon={faAddressBook} title="Contact" />
            </ul>
        </nav>
    );
}

function NavItem({ icon, title, active }) {
    let className;
    if (active) {
        className = "p-3 flex flex-1 rounded-md flex-col items-center bg-gradient-to-t from-theme-blue to-theme-blue-light space-y-1";
    } else {
        className = "p-3 flex flex-1 rounded-md flex-col items-center bg-neutral-800 space-y-1";
    }
    return (
        <li className={className}>
            <FontAwesomeIcon className="text-neutral-200 text-2xl" icon={icon} />
            <p className="text-neutral-200 text-sm">{title}</p>
        </li>
    );
}