import Icon from "../../atoms/Icon";

export default function ContactSection() {
    return (
        <ul className="flex xl:flex-col items-center xl:items-start justify-around space-y-2 xl:w-80 flex-shrink-0 flex-grow min-h-full w-full xl:p-12 p-4 bg-neutral-200 dark:bg-neutral-800 subtle-text text-xl xl:text-base">
            <li>
                <a href="tel:8608305595" className="flex gap-4 items-center" target="_blank" rel="noreferrer">
                    <Icon name="phone" />
                    <div className="hidden xl:inline">8608305595</div>
                </a>
            </li>
            <li className="flex gap-4 items-center">
                <a href="mailto:ianskelskey@gmail.com" className="flex gap-4 items-center" target="_blank" rel="noreferrer">
                    <Icon name="email" />
                    <div className="hidden xl:inline">ianskelskey@gmail.com</div>
                </a>
            </li>
            <li className="flex gap-4 items-center">
                <a href="https://www.linkedin.com/in/ianskelskey" className="flex gap-4 items-center" target="_blank" rel="noreferrer">
                    <Icon name="linkedin" />
                    <div className="hidden xl:inline">in/ianskelskey</div>
                </a>
            </li>
            <li className="flex gap-4 items-center">
                <a href="https://github.com/ianskelskey" className="flex gap-4 items-center" target="_blank" rel="noreferrer">
                    <Icon name="github" />
                    <div className="hidden xl:inline">github.com/ianskelskey</div>
                </a>
            </li>
        </ul>
    );
}