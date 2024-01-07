import { faFile, faBriefcase, faAddressBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Nav() {
    const [active, setActive] = useState(0);

    return (
        <nav className="large-card p-6 w-fit">
            <ul className="flex space-x-6">
                <NavItem icon={faUser} title="About" active={active === 0} onClick={() => setActive(0)} />
                <NavItem icon={faFile} title="Resume" active={active === 1} onClick={() => setActive(1)} />
                <NavItem icon={faBriefcase} title="Projects" active={active === 2} onClick={() => setActive(2)} />
                <NavItem icon={faAddressBook} title="Contact" active={active === 3} onClick={() => setActive(3)} />
            </ul>
        </nav>
    );
}

function NavItem({ icon, title, active, onClick }) {
    let className;
    if (active) {
        className = "p-3 flex flex-1 rounded-md flex-col items-center bg-gradient-to-t text-white from-theme-blue to-theme-blue-light space-y-1";
    } else {
        className = "p-3 flex flex-1 rounded-md flex-col items-center dark:bg-neutral-800 bg-neutral-200 space-y-1";
    }
    return (
        <li>
            <button onClick={onClick} className={className}>
                <FontAwesomeIcon className="text-2xl" icon={icon} />
                <p className="text-sm">{title}</p>
            </button>
        </li>
    );
}