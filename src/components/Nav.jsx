import { faFile, faBriefcase, faAddressBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Nav() {
    const [active, setActive] = useState(0);

    return (
        <nav className="sm:w-fit w-full">
            <ul className="flex xs:space-x-2 space-x-1 justify-between xs:justify-around">
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
        className = "active-tab flex flex-1 items-center space-x-2";
    } else {
        className = "inactive-tab flex flex-1 items-center space-x-2";
    }
    return (
        <li>
            <button onClick={onClick} className={className}>
                <FontAwesomeIcon className="xs:text-xl text:lg" icon={icon} />
                <p className="xs:text-sm text-xs">{title}</p>
            </button>
        </li>
    );
}