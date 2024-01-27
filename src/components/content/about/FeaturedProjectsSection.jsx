import { AnimatePresence } from "framer-motion";
import projects from "../../../data/projects";
import ProjectCard from "../../layout/ProjectCard";
import TitleIconSection from "../../layout/TitleIconSection";
import { motion } from "framer-motion";

export default function FeaturedProjectsSection() {
  return (
    <TitleIconSection title="Featured Projects" iconName="projects">
      <AnimatePresence>
        <motion.div className="grid grid-cols-1 2xl:grid-cols-2 gap-4" layout>
          {projects.filter((project) => project.featured).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

      </AnimatePresence>
    </TitleIconSection>
  );
}
