import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WaveSeparator from './components/WaveSeparator';
import ProfessionalExperience from './components/Experience';
import { DarkModeProvider } from './components/DarkModeContext'; // adjust the path if needed

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <DarkModeProvider>
      <div className="dark:bg-gray-900 dark:text-white"> {/* Apply dark mode globally */}
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <ProfessionalExperience />
        <Skills />
        <Contact />
      </div>
    </DarkModeProvider>
  );
}

export default App;
