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
function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <>
      <Navbar />
      
      <Hero />
      <WaveSeparator />
      <About />
      <WaveSeparator flip />
      <Projects />
      <WaveSeparator />
      <Skills />
      <WaveSeparator flip />
      <Contact />
    </>
  );
}

export default App;
