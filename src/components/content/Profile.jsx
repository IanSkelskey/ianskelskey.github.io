import IconLink from "../atoms/IconLink";
import personalData from "../../data/personalData";

export default function Profile() {
  return (
    <div className="flex flex-col items-center space-y-4 px-6">
      <img
        src="assets/headshot.png"
        alt="Headshot of Ian Skelskey"
        className="rounded-full w-48 aspect-square"
      />
      <p className="text-sm subtle-text dark:bg-neutral-900 bg-neutral-200 p-2 rounded-md">
        B.S. Software Engineering
      </p>
      <p className="text-center subtle-text">
        I'm a software engineer and creative. Welcome to my portfolio!
      </p>
      <div className="flex items-center space-x-3">
        {personalData.socials.map((social) => (
          <IconLink
            key={social.name}
            icon={social.icon}
            href={social.link}
          />
        ))}
      </div>
    </div>
  );
}

