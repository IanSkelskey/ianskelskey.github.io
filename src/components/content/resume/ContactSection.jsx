import Icon from "../../atoms/Icon";

export default function ContactSection({ contactInfo }) {
  const { phone, email, linkedin, github } = contactInfo;

  return (
    <ul className="flex xl:flex-col items-center xl:items-start justify-around xl:space-y-2 xl:w-80 flex-shrink-0 flex-grow min-h-full w-full xl:p-12 p-4 bg-neutral-200 dark:bg-neutral-800 subtle-text text-xl xl:text-base">
      <li>
        <a
          href={`tel:${phone}`}
          className="flex gap-4 items-center"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="phone" />
          <div className="hidden xl:inline">{phone}</div>
        </a>
      </li>
      <li className="flex gap-4 items-center">
        <a
          href={`mailto:${email}`}
          className="flex gap-4 items-center"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="email" />
          <div className="hidden xl:inline">{email}</div>
        </a>
      </li>
      <li className="flex gap-4 items-center">
        <a
          href={`https://www.linkedin.com/${linkedin}`}
          className="flex gap-4 items-center"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="linkedin" />
          <div className="hidden xl:inline">{linkedin}</div>
        </a>
      </li>
      <li className="flex gap-4 items-center">
        <a
          href={`https://www.github.com/${github}`}
          className="flex gap-4 items-center"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" />
          <div className="hidden xl:inline">{github}</div>
        </a>
      </li>
    </ul>
  );
}
