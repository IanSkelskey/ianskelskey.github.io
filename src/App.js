function App() {
  return (
    <div className="bg-gray-800 text-white min-h-screen p-8">
      <header className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/logo256.png" alt="Ian Skelskey Logo" className="h-16 w-16 mr-4 rounded-full" />
          <h1 className="text-4xl font-bold">Ian Skelskey</h1>
        </div>
        <nav>
          <a href="https://github.com/IanSkelskey" className="text-lg mr-4">GitHub</a>
          <a href="https://www.linkedin.com/in/ianskelskey/" className="text-lg">LinkedIn</a>
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
          {/* Add project cards or list items here */}
        </section>
        {/* Add more sections as needed */}
      </main>
      <footer className="text-center py-8">
        <p>© 2023 Ian Skelskey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
