import AboutSection from './components/AboutSection';
import ContentCard from './components/ContentCard';
import FloatingContactSection from './components/FloatingContactSection';

function App() {
  return (
    <div className="min-h-screen flex w-full items-center bg-neutral-800 p-12 space-x-12">
      <FloatingContactSection />
      <ContentCard title="About Me">
        <AboutSection />
      </ContentCard>
    </div>
  );
}

export default App;
