import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProfessionalExperience from './components/Experience';
import WaveSeparator from './components/WaveSeparator';
import ScrollToTop from './components/ScrollToTop';
import PageWrapper from './components/PageWrapper';
import { DarkModeProvider } from './components/DarkModeContext';
import heroData from './data/hero';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Hero {...heroData} /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><ProfessionalExperience /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><div className="text-center py-20">404 - Page Not Found</div></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <DarkModeProvider>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Router>
          <ScrollToTop />
          <Navbar />
          <AnimatedRoutes />
        </Router>
      </div>
    </DarkModeProvider>
  );
}

export default App;
