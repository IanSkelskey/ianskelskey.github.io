import experience from "../../../data/experience";
import Icon from "../../atoms/Icon";

export default function ExperienceSection() {
    return (
        <div>
            <h3 className="text-lg font-serif font-bold italic">Experience</h3>
            <div className="flex flex-col gap-4">
                {experience.map((item) => (
                    <div key={item.title} className="flex flex-col gap-2">
                        <p className="subltle-text italic">{item.title + " | " + item.employer + " | " + item.location + " | " + item.date}</p>
                        <ul className="pl-5">
                            {item.bullets.map((bullet) => (
                                <li key={bullet} className="subltle-text list-disc">{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}