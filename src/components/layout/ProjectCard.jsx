import { Link } from "react-router-dom";
import Badge from "../atoms/Badge";
import IconButton from "../atoms/IconButton";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
    return (
        <motion.div
            className="flex flex-col lg:flex-row dark:bg-neutral-900 bg-neutral-100 relative"
            key={project.title}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.35 }}
            layout
        >

            {/* View More Button Container - Should only be visible on hover*/}
            <motion.div className="absolute w-full h-full dark:bg-neutral-800 bg-neutral-200 dark:bg-opacity-60 bg-opacity-60"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}

            >
                {/* Center the button on the card */}
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <Link to={project.path}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}>
                            <IconButton className="bg-theme-blue rounded-md text-white text-sm w-fit" text="View More" icon="eye" />
                        </motion.div>
                    </Link>
                </div>
            </motion.div>


            <motion.div layout style={{ backgroundImage: `url(${project.thumbnail})` }} className="w-full lg:w-1/3 min-h-70 bg-cover bg-center flex-shrink-0 flex justify-center items-center" />

            <motion.div layout className="flex flex-col p-4 gap-4 w-full">
                <h4 className="text-xl font-bold">{project.title}</h4>
                <div className="flex justify-between">
                    <p className="subtle-text">{project.category}</p>
                    <p className="subtle-text">{project.date}</p>
                </div>
                
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
            </motion.div>

        </motion.div>
    );
}