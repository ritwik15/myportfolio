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
import heroData from './data/hero';// adjust path if needed
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <DarkModeProvider>
      <div className="dark:bg-gray-900 dark:text-white"> {/* Apply dark mode globally */}
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero {...heroData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={ <Projects />} />
        <Route path="/experience" element={<ProfessionalExperience />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
        {/* <Navbar />
        <Hero {...heroData} />
        <About />
        <Projects />
        <ProfessionalExperience />
        <Skills />
        <Contact /> */}
      </div>
    </DarkModeProvider>
  );
}

export default App;
