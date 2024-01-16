import personalData from "../data/personalData";
import { SocialIconLink } from "../sections/ContactCard";

export default function AdaptiveProfileShowcase({
  profileSection,
  navSection,
  footer,
  children,
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex md:flex-row flex-col w-full">
        <div className="flex flex-col space-y-6 items-center w-full md:w-96 p-6 ">
          <h1 className="text-2xl font-serif font-bold">Ian Skelskey</h1>
          <img src="assets/headshot.png" alt="Headshot of Ian Skelskey" className="rounded-full w-4/5 aspect-square" />
          <p className="text-sm subtle-text dark:bg-neutral-900 bg-neutral-200     p-2 rounded-md">
            B.S. Software Engineering
          </p>
          <p className="text-center subtle-text">
            I'm a software engineer and creative. Welcome to my portfolio!
          </p>
          <div className="flex items-center space-x-3">
            {personalData.socials.map((social) => (
              <SocialIconLink key={social.name} icon={social.icon} href={social.link} />
            ))}
          </div>
          {navSection}
        </div>
        <div className="flex flex-col w-full dark:bg-black bg-white min-h-screen">
          <div className="w-full flex-grow">
            {children}

          </div>
          <footer className="p-6 dark:bg-neutral-900 bg-neutral-150">
            {footer}
          </footer>
        </div>
      </div>

    </div>
  );
}
