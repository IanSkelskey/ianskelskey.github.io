import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import IconRenderer from "../components/IconRenderer";
import DetailWrapper from "../components/DetailWrapper";
import { staggerContainer, itemFadeIn } from "../animations";
import "./ProjectDetail.css";

const ProjectDetail = ({ projects, skillsData }) => {
  const { projectPath } = useParams();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Find current, next and previous projects
  useEffect(() => {
    setLoading(true);
    const currentProjectIndex = projects.findIndex(
      (p) => p.path === `/projects/${projectPath}`,
    );

    if (currentProjectIndex !== -1) {
      setProject(projects[currentProjectIndex]);

      // Set next project, cycle to first if at the end
      setNextProject(
        currentProjectIndex < projects.length - 1
          ? projects[currentProjectIndex + 1]
          : projects[0],
      );

      // Set previous project, cycle to last if at the beginning
      setPrevProject(
        currentProjectIndex > 0
          ? projects[currentProjectIndex - 1]
          : projects[projects.length - 1],
      );
    }

    setLoading(false);
  }, [projectPath, projects]);

  // Helper function to extract just the project identifier from path
  const getProjectIdentifier = (path) => {
    return path.split("/").pop();
  };

  // Helper function to get skill id from name
  const getSkillId = (skillName) => {
    if (!skillsData) return skillName.toLowerCase().replace(/\s+/g, "-");

    const skill = skillsData.skills.find(
      (s) => s.name.toLowerCase() === skillName.toLowerCase(),
    );

    return skill ? skill.id : skillName.toLowerCase().replace(/\s+/g, "-");
  };

  if (loading) {
    return (
      <div className="loading" aria-live="polite">
        <span>Loading project details...</span>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="loading" aria-live="polite">
        <span>Project not found</span>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  // Get categories (supporting both old and new format)
  const projectCategories = Array.isArray(project.categories)
    ? project.categories
    : project.category
      ? [project.category]
      : [];

  // Prepare metadata array for DetailWrapper
  const projectMetadata = [
    ...(project.date ? [project.date] : []),
    ...projectCategories,
  ];

  // Prepare icon for DetailWrapper
  const projectIcon = project.icon ? (
    <IconRenderer icon={project.icon} />
  ) : null;

  return (
    <DetailWrapper
      title={project.title}
      subtitle={project.subtitle}
      backLink="/projects"
      backText="Back to Projects"
      icon={projectIcon}
      metadata={projectMetadata}
      heroImage={
        project.thumbnail ||
        `https://via.placeholder.com/1200x600?text=${encodeURIComponent(project.title)}`
      }
      heroAlt={`${project.title} screenshot or preview`}
      accentColor={project.accentColor}
      className="project-detail"
    >
      <motion.div
        className="project-description"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="section-heading" variants={itemFadeIn(0)}>
          About the Project
        </motion.h2>

        {/* Use pageBlurb if available, otherwise use description */}
        <motion.p variants={itemFadeIn(1)}>
          {project.pageBlurb || project.description}
        </motion.p>

        {/* Display structured content if available */}
        {project.content &&
          project.content.length > 0 &&
          project.content.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <motion.p key={index} variants={itemFadeIn(index + 2)}>
                  {item.content}
                </motion.p>
              );
            }
            // Handle other content types as needed
            return null;
          })}

        {/* Only show skills section if skills are available */}
        {project.skills && project.skills.length > 0 && (
          <>
            <motion.h2
              className="section-heading"
              variants={itemFadeIn(
                project.content ? project.content.length + 2 : 2,
              )}
            >
              Technologies Used
            </motion.h2>
            <motion.div
              className="tech-stack"
              variants={staggerContainer(0.05)}
            >
              {project.skills.map((skill, index) => (
                <motion.div key={skill} variants={itemFadeIn(index)}>
                  <Link
                    to={`/skills/${getSkillId(skill)}`}
                    className="tech-badge"
                  >
                    {skill}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {/* Project links section - only show if there are links available */}
        {(project.github ||
          project.npmUrl ||
          project.gptUrl ||
          project.mobileAppUrl ||
          project.desktopAppUrl ||
          (project.links && project.links.length > 0)) && (
          <motion.div
            className="project-links-section"
            variants={staggerContainer(0.1)}
          >
            <motion.h2 variants={itemFadeIn(0)}>Project Links</motion.h2>

            {/* Primary project links */}
            <motion.div
              className="project-links"
              variants={staggerContainer(0.05)}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-github"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  GitHub Repository
                </a>
              )}

              {project.npmUrl && (
                <a
                  href={project.npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-npm"
                  aria-label={`npm package for ${project.title}`}
                >
                  npm Package
                </a>
              )}

              {project.gptUrl && (
                <a
                  href={project.gptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gpt"
                  aria-label={`Try ${project.title} in ChatGPT`}
                >
                  Try in ChatGPT
                </a>
              )}

              {/* Live demo links from links array */}
              {project.links &&
                project.links.some(
                  (link) =>
                    link.title.toLowerCase().includes("live") ||
                    link.title.toLowerCase().includes("website") ||
                    link.title.toLowerCase().includes("demo"),
                ) &&
                project.links
                  .filter(
                    (link) =>
                      link.title.toLowerCase().includes("live") ||
                      link.title.toLowerCase().includes("website") ||
                      link.title.toLowerCase().includes("demo"),
                  )
                  .map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-live"
                      aria-label={`${link.title} for ${project.title}`}
                    >
                      {link.title}
                    </a>
                  ))}

              {project.mobileAppUrl && (
                <a
                  href={project.mobileAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mobile"
                  aria-label={`Mobile app for ${project.title}`}
                >
                  Mobile App
                </a>
              )}

              {project.desktopAppUrl && (
                <a
                  href={project.desktopAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-desktop"
                  aria-label={`Desktop app for ${project.title}`}
                >
                  Desktop App
                </a>
              )}
            </motion.div>

            {/* Additional links from the links array that are not live/demo links */}
            {project.links &&
              project.links.length > 0 &&
              project.links.filter(
                (link) =>
                  !(
                    link.title.toLowerCase().includes("live") ||
                    link.title.toLowerCase().includes("website") ||
                    link.title.toLowerCase().includes("demo")
                  ),
              ).length > 0 && (
                <div className="additional-links">
                  <h3>Additional Resources</h3>
                  <ul className="resources-list">
                    {project.links
                      .filter(
                        (link) =>
                          !(
                            link.title.toLowerCase().includes("live") ||
                            link.title.toLowerCase().includes("website") ||
                            link.title.toLowerCase().includes("demo")
                          ),
                      )
                      .map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${link.title} resource for ${project.title}`}
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
          </motion.div>
        )}
      </motion.div>

      <motion.section
        className="project-navigation"
        aria-label="Project navigation"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="centered" variants={itemFadeIn(0)}>
          More Projects
        </motion.h2>
        <motion.div className="project-nav-container" variants={itemFadeIn(1)}>
          {prevProject && (
            <motion.div variants={itemFadeIn(2)}>
              <Link
                to={`/projects/${getProjectIdentifier(prevProject.path)}`}
                className="nav-card prev"
                aria-label={`Previous project: ${prevProject.title}`}
              >
                <div className="nav-image" aria-hidden="true">
                  <img
                    src={
                      prevProject.thumbnail ||
                      `https://via.placeholder.com/300x200?text=${encodeURIComponent(prevProject.title)}`
                    }
                    alt=""
                  />
                </div>
                <div className="nav-content">
                  <span className="nav-direction">Previous</span>
                  <h3>{prevProject.title}</h3>
                </div>
              </Link>
            </motion.div>
          )}

          {nextProject && (
            <motion.div variants={itemFadeIn(3)}>
              <Link
                to={`/projects/${getProjectIdentifier(nextProject.path)}`}
                className="nav-card next"
                aria-label={`Next project: ${nextProject.title}`}
              >
                <div className="nav-content">
                  <span className="nav-direction">Next</span>
                  <h3>{nextProject.title}</h3>
                </div>
                <div className="nav-image" aria-hidden="true">
                  <img
                    src={
                      nextProject.thumbnail ||
                      `https://via.placeholder.com/300x200?text=${encodeURIComponent(nextProject.title)}`
                    }
                    alt=""
                  />
                </div>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.section>
    </DetailWrapper>
  );
};

export default ProjectDetail;
