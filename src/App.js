import WhatIDoSection from './components/content/WhatIDoSection';
import BioBlurb from './components/content/BioBlurb';
import FloatingContactSection from './components/FloatingContactSection';
import Nav from './components/Nav';
import SectionTitle from './components/atoms/SectionTitle';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full md:p-12 p-6 max-w-screen-3xl mx-auto">
      <div className='flex md:flex-row flex-col w-full md:space-x-6 space-y-6'>
        <div className='h-fit'>
          <FloatingContactSection />
        </div>
        <div className='flex flex-0 flex-col md:pt-14'>
          <div className='flex md:justify-end justify-center'>
            <Nav />
          </div>
          <div className="flex flex-col space-y-6 w-full relative content-card">
            <SectionTitle
              title="About"
              className='pt-6 md:pt-12 px-6 md:px-12 md:inline hidden' />
            <BioBlurb
              className="subtle-text px-6 md:px-12 space-y-6" />
            <div className='px-6 md:px-12 pb-6 md:pb-12'><WhatIDoSection /></div>

          </div>
        </div>
      </div>

      <footer className="flex justify-center items-center pt-6">
        <p>
          © 2024 Ian Skelskey. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
