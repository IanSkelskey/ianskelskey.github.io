import AboutSection from './components/AboutSection';
import ContentCard from './components/ContentCard';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full items-center bg-neutral-800 p-12 space-y-12">
      <ContentCard title="About Me">
        <AboutSection />
      </ContentCard>
      <ContentCard title="Projects">
        <ProjectsSection />
      </ContentCard>
    </div>
  );
}

export default App;
