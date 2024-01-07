import AboutSection from './components/AboutSection';
import ContentCard from './components/ContentCard';
import FloatingContactSection from './components/FloatingContactSection';
import Nav from './components/Nav';

function App() {
  return (
    <div className="min-h-screen flex w-full md:p-12 p-6 space-x-6 max-w-screen-3xl mx-auto">
      <FloatingContactSection />
      <div className='flex flex-col md:pt-20'>
        <div className='flex md:justify-end justify-center'>
          <Nav />
        </div>
        <ContentCard title="About Me">
          <AboutSection />
        </ContentCard>
      </div>
    </div>
  );
}

export default App;
