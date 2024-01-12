import {
    faCss3Alt,
    faGithubAlt,
    faHtml5,
    faReact,
    faSquareFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import Badge from "../atoms/Badge";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <section className="flex flex-col space-y-2 justify-center items-center">
            <p>Made with:</p>
            <div className="flex flex-row gap-4 flex-wrap justify-center">
                <Badge
                    icon={faReact}
                    text="React"
                    bgColorClass="bg-blue-600 rounded-md w-fit"
                />
                <Badge
                    icon={faHtml5}
                    text="HTML5"
                    bgColorClass="bg-red-600 rounded-md w-fit"
                />
                <Badge
                    icon={faCss3Alt}
                    text="CSS3"
                    bgColorClass="bg-green-700 rounded-md w-fit"
                />
                <Badge
                    icon={faSquareFontAwesome}
                    text="FontAwesome"
                    bgColorClass="bg-amber-700 rounded-md w-fit"
                />
                <Badge
                    text="Formspree"
                    bgColorClass="bg-orange-700 rounded-md w-fit"
                />
                <Badge
                    text="Prettier"
                    bgColorClass="bg-purple-600 rounded-md w-fit"
                />
                <Badge
                    icon={faGithubAlt}
                    text="Github Pages"
                    bgColorClass="bg-gray-600 rounded-md w-fit"
                />
                <Badge
                    icon={faHeart}
                    text="Love"
                    bgColorClass="bg-pink-600 rounded-md w-fit"
                />
            </div>
            <p>© 2024 Ian Skelskey. All rights reserved.</p>
        </section>
    );
}
