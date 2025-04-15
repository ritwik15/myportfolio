import React from 'react';

const Hero = () => {
  return (
    <section className="hero-pattern" id="hero" data-aos="fade-in">
      <img 
        src="/profile.jpg" 
        alt="Ritwik Profile" 
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '20px',
          border: '4px solid #0070f3',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      />
      <h1>Hey, I'm Ritwik 👋</h1>
      <h2>Full-Stack JavaScript Developer</h2>
      <p>I build scalable web apps using React, Node.js, and AWS.</p>
    </section>
  );
};

export default Hero;
