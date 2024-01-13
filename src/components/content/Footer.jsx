import {
    faGithubAlt,
    faReact,
    faSquareFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import Badge from "../atoms/Badge";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { SiPrettier, SiSimpleicons, SiTailwindcss } from "@icons-pack/react-simple-icons";

export default function Footer() {
    return (
        <section className="flex flex-col space-y-2 justify-center items-center">
            <p>Made with:</p>
            <div className="flex flex-row gap-4 flex-wrap justify-center">
                <Badge
                    faIcon={faReact}
                    text="React"
                    bgColorClass="bg-blue-600 rounded-md w-fit"
                />
                <Badge
                    siIcon={<SiTailwindcss size={20} color="#ffffff" />}
                    text="Tailwind CSS"
                    bgColorClass="bg-red-600 rounded-md w-fit"
                />
                <Badge
                    faIcon={faSquareFontAwesome}
                    text="FontAwesome"
                    bgColorClass="bg-amber-700 rounded-md w-fit"
                />
                <Badge
                    siIcon={<SiSimpleicons size={20} color="#ffffff" />}
                    text="Simple Icons"
                    bgColorClass="bg-green-600 rounded-md w-fit"
                />
                <Badge
                    text="Formspree"
                    bgColorClass="bg-orange-700 rounded-md w-fit"
                />
                <Badge
                    siIcon={<SiPrettier size={16} color="#ffffff" />}
                    text="Prettier"
                    bgColorClass="bg-purple-600 rounded-md w-fit"
                />
                <Badge
                    faIcon={faGithubAlt}
                    text="Github Pages"
                    bgColorClass="bg-gray-600 rounded-md w-fit"
                />
                <Badge
                    faIcon={faHeart}
                    text="Love"
                    bgColorClass="bg-pink-600 rounded-md w-fit"
                />
            </div>
            <p>© 2024 Ian Skelskey. All rights reserved.</p>
        </section>
    );
}
