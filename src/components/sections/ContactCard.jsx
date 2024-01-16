import Icon from "../atoms/Icon";
import personalData from "../data/personalData";

export default function ContactCard() {
  return (
    <div className="large-card w-full flex-col h-full space-y-2 md:space-y-4 p-6 items-center relative md:top-31 flex">
      <div className="flex flex-col sm:flex-row md:flex-col items-center space-y-2 md:space-y-4 relative w-full space-x-0 sm:space-x-6 md:space-x-0">
        <div className="md:absolute md:-top-40 rounded-full w-40 h-40 dark:bg-[url('assets/headshot.png')] bg-[url('assets/headshot-light.png')] bg-cover" />
        <div className="flex flex-col items-center sm:items-start md:items-center space-y-2 md:space-y-4">
          <h1 className="text-2xl font-serif font-bold">Ian Skelskey</h1>
          <p className="text-sm subtle-text dark:bg-neutral-800 bg-neutral-100     p-2 rounded-md">
            B.S. Software Engineering
          </p>
          <div className="flex items-center space-x-3">
            {personalData.socials.map((social) => (
              <SocialIconLink key={social.name} icon={social.icon} href={social.link} />
            ))}
          </div>
        </div>
      </div>
      <ul className="grid sm:grid-cols-3 place-items-center md:flex md:items-start items-center md:flex-col md:space-y-2 divide-y-0 md:divide-y-2 dark:divide-neutral-700 divide-neutral-300 p-3 md:dark:bg-neutral-800 md:bg-neutral-100 rounded-md w-full">
        {personalData.contact.map((item) => (
          <ContactListItem key={item.title} icon={item.icon} tite={item.title} link={item.link} content={item.content} />
        ))}
      </ul>
    </div>
  );
}

function SocialIconLink({ icon, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Icon
        name={icon}
        className="dark:text-neutral-400 text-neutral-600 text-xl p-2 dark:bg-neutral-900 bg-neutral-200 dark:hover:text-white hover:text-black rounded-md"
      />
    </a>
  );
}

function ContactListItem({ icon, tite, link, content }) {
  return (
    <li className="flex md:space-x-3 items-center text-center md:text-left py-1 sm:py-2 w-full">
      <Icon
        name={icon}
        className="px-2 dark:text-neutral-400 text-neutral-600 md:text-xl text-md"
      />
      <div className="flex flex-col w-full">
        <div className="dark:text-neutral-400 text-neutral-600 text-sm md:inline hidden">
          {tite}
        </div>
        <div className="text-sm">
          <a href={link} target="_blank" rel="noreferrer">
            {content}
          </a>
        </div>
      </div>
    </li>
  );
}

export { SocialIconLink, ContactListItem };