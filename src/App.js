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
    initial: { opacity: 0},
    animate: { opacity: 1},
    exit: { opacity: 0 }
  };

  return (
    <div className="dark:bg-gray-800 bg-white dark:text-white text-black min-h-screen p-8">
      <header className="flex-none h-12">
        <div className="flex items-center justify-between h-full">
          <h1 className="text-4xl font-bold">Ian Skelskey</h1>
          <nav>
            <button
              className="mx-4 py-2 px-4 rounded-md bg-brand-blue dark:bg-brand-red"
              onClick={() => navigateTo('about')}
            >
              About
            </button>
            <button
              className="mx-4 py-2 px-4 rounded-md bg-brand-blue dark:bg-brand-red"
              onClick={() => navigateTo('projects')}
            >
              Projects
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow overflow-auto">
        <div className="relative" style={{ height: 'calc(100vh - 13rem)' }}>
          <AnimatePresence>
            {contentKey === 'about' && (
              <motion.div
                key="about"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
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
                className="absolute inset-0"
              >
                <Projects />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>

      {/* Footer */}
      <footer className="flex-none h-24">
        <p>© 2023 Ian Skelskey. All rights reserved.</p>
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
