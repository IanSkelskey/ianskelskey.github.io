import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  // State to track which content to show
  const [contentKey, setContentKey] = useState('about');
  const navigateTo = (key) => {
    setContentKey(key);
  };

  // Define your animation variants
  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className="dark:bg-gray-800 bg-white dark:text-white text-black min-h-screen p-8">
      <header className="flex-none">
        <nav className='flex justify-between'>
          <button className='bg-brand-blue dark:bg-brand-red py-2 px-4 rounded-md' onClick={() => navigateTo('about')}>About</button>
          <button className='bg-brand-blue dark:bg-brand-red py-2 px-4 rounded-md' onClick={() => navigateTo('projects')}>Projects</button>
        </nav>
        <div className="flex items-center">
          <img src="/logo256.png" alt="Ian Skelskey Logo" className="h-24 w-24 mr-4 rounded-full" />
          <h1 className="text-4xl font-bold">Ian Skelskey</h1>
        </div>
      </header>

      <main className="flex-grow overflow-auto">
        <AnimatePresence>
          {contentKey === 'about' && (
            <motion.div
              key="about"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
            </motion.div>
          )}
          {contentKey === 'projects' && (
            <motion.div
              key="projects"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="my-12"
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>


      </main>

      {/* Footer */}
      <footer className="flex-none">
        <p>© 2023 Ian Skelskey. All rights reserved.</p>
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>If you're interested in working together, please reach out to me at <a href="mailto:ianskelskey@gmail.com" className="text-brand-blue dark:text-brand-red">ianskelskey@gmail.com</a>.</p>
        <a href="https://github.com/IanSkelskey" className="text-lg mr-4 hover:text-brand-blue dark:hover:text-brand-red">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/ianskelskey/" className="text-lg hover:text-brand-blue dark:hover:text-brand-red">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </footer>
    </div>
  );
}

export default App;
