import NavListItem from "./NavListItem";

export default function NavList({ pages }) {
  return (
    <nav className="flex flex-col justify-center w-full gap-2">
      {pages.map((page, index) => (
        <NavListItem
          key={index}
          name={page.title}
          icon={page.icon}
          path={page.path}
        />
      ))}
    </nav>
  );
}
