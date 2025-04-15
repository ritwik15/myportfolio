import React from 'react';

const Hero = () => {
  return (
    <section className="hero-pattern" id="hero" style={styles.section}>
      <img
        className="profile-pic"
        src="/profile.jpg"
        alt="Ritwik's profile picture"
        style={styles.profilePic}
      />
      <div className="hero-content" style={styles.content}>
        <h1 style={styles.heading}>Hello, I'm Ritwik</h1>
        <p style={styles.paragraph}>
          I'm a Full-Stack JavaScript Developer and Team Lead with 10+ years of experience in Angular,
          React.js, Node.js, PostgreSQL, AWS, and API development. I specialize in building scalable and
          dynamic applications.
        </p>
        <a href="#contact" style={styles.button}>Contact Me</a>
      </div>
    </section>
  );
};

const styles = {
  section: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '80px 20px',
    borderRadius: '12px',
    marginBottom: '40px',
  },
  profilePic: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '4px solid #fff',
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
  },
  content: {
    maxWidth: '800px',
  },
  heading: {
    fontSize: '36px',
    color: '#0070f3',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  }
};

export default Hero;
