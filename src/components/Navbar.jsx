import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#fff', position: 'sticky', top: 0, borderBottom: '1px solid #ddd', zIndex: 10 }}>
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
