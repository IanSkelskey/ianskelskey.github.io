import AboutSection from './components/AboutSection';
import ContentCard from './components/ContentCard';
import FloatingContactSection from './components/FloatingContactSection';
import Nav from './components/Nav';

function App() {
  return (
    <div className="min-h-screen flex w-full items-center p-12 space-x-6">
      <FloatingContactSection />
      <div className='flex flex-col space-y-6'>
        <Nav />
        <ContentCard title="About Me">
          <AboutSection />
        </ContentCard>
      </div>
    </div>
  );
}

export default App;
