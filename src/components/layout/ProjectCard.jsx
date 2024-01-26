import { Link } from "react-router-dom";
import Badge from "../atoms/Badge";
import IconButton from "../atoms/IconButton";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
    return (
        <motion.div
            className="flex dark:bg-neutral-900 bg-neutral-100"
            key={project.title}
            initial={{ scale: 0}}
            animate={{ scale: 1}}
            exit={{ scale: 0}}
        >
            <div style={{ backgroundImage: `url(${project.thumbnail})` }} className="w-1/3 bg-cover bg-center flex-shrink-0 flex justify-center items-center">
                <Link to={project.path}>
                    <IconButton className="bg-theme-blue rounded-md text-white text-sm" text="View More" icon="eye" />
                </Link>
            </div>

            <div className="flex flex-col p-4 gap-4">
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="subtle-text">{project.category}</p>
                <p className="text-sm">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                    {project.skills.map((skill) => (
                        <Badge
                            key={skill.name}
                            iconName={skill.icon}
                            text={skill.name}
                            color={skill.color}
                        />
                    ))}
                </div>
            </div>

        </motion.div>
    );
}