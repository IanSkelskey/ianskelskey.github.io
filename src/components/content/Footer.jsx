import Badge from "../atoms/Badge";
import techStack from "../../data/techStack";

export default function Footer() {
  return (
    <section className="flex flex-col space-y-2 justify-center items-center text-4">
      <p>Made with:</p>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        {techStack.map((tech) => (
          <Badge
            key={tech.title}
            iconName={tech.icon}
            text={tech.name}
            color={tech.color}
          />
        ))}
      </div>
      <p>© 2024 Ian Skelskey. All rights reserved.</p>
    </section>
  );
}
