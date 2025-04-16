import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaTools, FaPhoneAlt, FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useDarkMode } from './DarkModeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // close mobile menu if switching to desktop
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav style={{
      backgroundColor: darkMode ? '#1e1e1e' : '#fff',
      color: darkMode ? '#fff' : '#000',
      padding: '12px 24px',
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={styles.navbarContainer}>
        {/* <div style={styles.brand}>
          <h2 style={{ margin: 0, color: '#0070f3' }}>Ritwik</h2>
        </div> */}

        {isMobile ? (
          <>
            <button style={styles.hamburgerBtn} onClick={handleToggleMenu}><FaBars /></button>
            {isOpen && (
              <ul style={styles.mobileMenu}>
                {navItems()}
              </ul>
            )}
          </>
        ) : (
          <ul style={styles.desktopMenu}>
            {navItems()}
          </ul>
        )}
      </div>
    </nav>
  );

  function navItems() {
    return (
      <>
        <li><a href="#hero" style={styles.link}><FaHome /> Home</a></li>
        <li><a href="#about" style={styles.link}><FaUser /> About</a></li>
        <li><a href="#projects" style={styles.link}><FaProjectDiagram /> Projects</a></li>
        <li><a href="#professionalexp" style={styles.link}><FaBriefcase /> Experience</a></li>
        <li><a href="#skills" style={styles.link}><FaTools /> Skills</a></li>
        <li><a href="#contact" style={styles.link}><FaPhoneAlt /> Contact</a></li>
        <li>
          <button onClick={toggleDarkMode} style={styles.toggleBtn}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </li>
      </>
    );
  }
};

const styles = {
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  brand: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  hamburgerBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '22px',
    cursor: 'pointer',
    color: 'inherit'
  },
  mobileMenu: {
    listStyle: 'none',
    padding: 0,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  desktopMenu: {
    listStyle: 'none',
    display: 'flex',
    gap: '24px',
    margin: 0,
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
    color: '#0070f3',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  toggleBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    color: 'inherit'
  }
};

export default Navbar;
