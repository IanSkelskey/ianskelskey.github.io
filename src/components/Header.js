export default function Header() {
    return(
        <header className="bg-theme-brown text-theme-white h-12 flex items-center justify-between px-10 w-full">
            <h3 className="text-center">Ian Skelskey</h3>
            <nav>
                <ul className="flex items-center space-x-4">
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Resume
                    </li>
                </ul>
            </nav>
        </header>
    )
}