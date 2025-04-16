import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import WaveSeparator from './components/WaveSeparator';
import ProfessionalExperience from './components/Experience';
import { DarkModeProvider } from './components/DarkModeContext'; // adjust the 
// path if needed
import { useDarkMode } from './components/DarkModeContext';

function App() {
  const { darkMode } = useDarkMode(); // 👈 get the dark mode state
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : ''}> {/* 👈 root-level class */}
      <Navbar />
      <WaveSeparator flip />
      <Hero />
      <WaveSeparator />
      <About />
      <WaveSeparator flip />
      <Projects />
      <WaveSeparator />
      <ProfessionalExperience />
      <WaveSeparator flip />
      <Skills />
      <WaveSeparator />
      <Contact />
    </div>
  );
}

export default App;
