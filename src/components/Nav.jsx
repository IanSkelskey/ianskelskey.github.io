import { faFile, faBriefcase, faAddressBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Nav() {
    const [active, setActive] = useState(0);

    return (
        <nav className="w-fit">
            <ul className="flex space-x-2">
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
        className = "sm:p-3 p-2 flex flex-1 rounded-t-md items-center bg-gradient-to-t text-white from-theme-blue to-theme-blue-light space-x-2";
    } else {
        className = "sm:p-3 p-2 flex flex-1 rounded-t-md items-center dark:text-neutral-200 text-neutral-600 dark:bg-neutral-900 bg-neutral-100 space-x-2";
    }
    return (
        <li>
            <button onClick={onClick} className={className}>
                <FontAwesomeIcon className="sm:text-xl text:lg" icon={icon} />
                <p className="text-sm">{title}</p>
            </button>
        </li>
    );
}