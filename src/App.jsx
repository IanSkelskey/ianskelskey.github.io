import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import ProjectGrid from "./pages/ProjectPage";
import ProjectDetail from "./pages/ProjectDetail";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import SkillDetail from "./pages/SkillDetail";
import NotFound from "./pages/NotFound";

function App() {
  const [projects, setProjects] = useState([]);
  const [aboutData, setAboutData] = useState(null);
  const [socialData, setSocialData] = useState(null);
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to get the correct path for data files
  const getDataPath = (filename) => {
    // In development, use the src path; in production, use just /data/
    return import.meta.env.DEV
      ? `/src/data/${filename}`
      : `/data/${filename}`;
  };

  useEffect(() => {
    // Load all data in parallel
    Promise.all([
      fetch(getDataPath("projects.json")).then((res) => res.json()),
      fetch(getDataPath("about.json")).then((res) => res.json()),
      fetch(getDataPath("socialLinks.json")).then((res) => res.json()),
      fetch(getDataPath("skills.json")).then((res) => res.json()),
    ])
      .then(([projectsData, about, social, skills]) => {
        // Process projects to ensure consistent format (migrate from single category to categories array)
        const processedProjects = (projectsData.projects || []).map(
          (project) => {
            const updatedProject = { ...project };

            // If project has category but not categories, convert to array
            if (project.category && !project.categories) {
              updatedProject.categories = [project.category];
            }

            return updatedProject;
          }
        );

        setProjects(processedProjects);
        setAboutData(about);
        setSocialData(social);
        setSkillsData(skills);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content-container">
          {error && <div className="error-message">Error: {error}</div>}
          <Routes>
            <Route
              path="/"
              element={<HomePage projects={projects} socialData={socialData} />}
            />
            <Route
              path="/projects"
              element={<ProjectGrid projects={projects} />}
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  aboutData={aboutData}
                  skillsData={skillsData}
                  socialData={socialData}
                />
              }
            />
            <Route
              path="/contact"
              element={<ContactPage socialLinks={socialData?.socialLinks} />}
            />
            <Route
              path="/projects/:projectPath"
              element={
                <ProjectDetail projects={projects} skillsData={skillsData} />
              }
            />
            <Route
              path="/skills/:skillId"
              element={
                <SkillDetail skillsData={skillsData} projects={projects} />
              }
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer socialLinks={socialData?.socialLinks} />
      </div>
    </Router>
  );
}

export default App;
