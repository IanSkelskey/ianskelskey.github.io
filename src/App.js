import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="dark:bg-gray-800 bg-white dark:text-white text-black min-h-screen p-8">
      <header className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/logo256.png" alt="Ian Skelskey Logo" className="h-24 w-24 mr-4 rounded-full" />
          <h1 className="text-4xl font-bold">Ian Skelskey</h1>
        </div>
        <nav>
          <a href="https://github.com/IanSkelskey" className="text-lg mr-4 hover:text-brand-blue dark:hover:text-brand-red">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/ianskelskey/" className="text-lg hover:text-brand-blue dark:hover:text-brand-red">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </nav>
      </header>
      <main>
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>
            I'm a Software Engineering student at Arizona State University and a Shift Supervisor and Barista Trainer at Starbucks. I'm passionate about video game development and design. My goal is to work for a company that makes products I respect, ideally as a software developer or designer.
          </p>
        </section>
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="aspect-w-16 aspect-h-9 my-8">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube-nocookie.com/embed/FTwQ3LYJrfM?si=f-V2bQT8vOpM0RQZ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        {/* Skills Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Replace with your actual skills */}
            <span className="skill-badge">Java</span>
            <span className="skill-badge">React</span>
            <span className="skill-badge">Tailwind CSS</span>
            <span className="skill-badge">Game Development</span>
          </div>
        </section>

        {/* Education Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="text-2xl font-semibold">B.S. in Software Engineering</h3>
            <p className="italic">Arizona State University - 2023</p>
            <h3 className='text-2xl font-semibold'>A.S. in Computer Science/Mathematics (Honors)</h3>
            <p className="italic">Tunxis Community College - 2019</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>If you're interested in working together, please reach out to me at <a href="mailto:ianskelskey@gmail.com" className="text-brand-blue dark:text-brand-red">ianskelskey@gmail.com</a>.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8">
        <p>© 2023 Ian Skelskey. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Utility class for skill badges
const skillBadge = `inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2`;

export default App;
