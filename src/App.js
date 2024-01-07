import AboutSection from './components/AboutSection';
import ContentCard from './components/ContentCard';
import FloatingContactSection from './components/FloatingContactSection';
import Nav from './components/Nav';

function App() {
  return (
    <div className="min-h-screen flex w-full md:flex-row flex-col md:p-12 p-6 md:space-x-6 space-y-6 max-w-screen-3xl mx-auto">
      <div className='h-fit'>
        <FloatingContactSection />
      </div>
      <div className='flex flex-0 flex-col md:pt-14'>
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
