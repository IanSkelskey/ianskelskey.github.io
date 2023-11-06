import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  // State to track which content to show
  const [contentKey, setContentKey] = useState('about');

  // Define your animation variants
  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className="dark:bg-gray-800 bg-white dark:text-white text-black min-h-screen p-8">
      <header className="flex-none">
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
          {contentKey === 'skills' && (
            <motion.div
              key="skills"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="my-12"
            >
              <Skills />
            </motion.div>
          )}
          {contentKey === 'education' && (
            <motion.div
              key="education"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="my-12"
            >
              <Education />
            </motion.div>
          )}
          {contentKey === 'contact' && (
            <motion.div
              key="contact"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="my-12"
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>


      </main>

      {/* Footer */}
      <footer className="flex-none">
        <p>© 2023 Ian Skelskey. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Utility class for skill badges
const skillBadge = `inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2`;

export default App;
