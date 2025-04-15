import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaTools, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#fff', position: 'sticky', top: 0, borderBottom: '1px solid #ddd', zIndex: 10 }}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="#hero" style={styles.navLink}>
            <FaHome style={styles.icon} /> Home
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#about" style={styles.navLink}>
            <FaUser style={styles.icon} /> About
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#projects" style={styles.navLink}>
            <FaProjectDiagram style={styles.icon} /> Projects
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#professionalexp" style={styles.navLink}>
            <FaBriefcase style={styles.icon} /> Professional Experience
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#skills" style={styles.navLink}>
            <FaTools style={styles.icon} /> Skills
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#contact" style={styles.navLink}>
            <FaPhoneAlt style={styles.icon} /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    gap: '20px',
  },
  navItem: {
    textDecoration: 'none',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  icon: {
    marginRight: '8px',
    fontSize: '20px',
    transition: 'transform 0.3s ease',
  },
};

export default Navbar;
