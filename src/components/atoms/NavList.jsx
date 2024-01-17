import NavListItem from "./NavListItem";

export default function NavList({ pages, selectedItem, setSelectedItem }) {
    return (
        <nav className="flex flex-col justify-center w-full text-lg">
            {pages.map((page, index) => (
                <NavListItem name={page.title} icon={page.icon} active={selectedItem === index} onClick={() => setSelectedItem(index)} />
            ))}
        </nav>
    )
}