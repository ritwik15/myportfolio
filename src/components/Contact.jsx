import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      
      style={{
        padding: '60px 20px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <h2>Contact Me</h2>
      <p>If you’d like to get in touch, feel free to email me or connect on GitHub and LinkedIn:</p>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
        <li style={{ margin: '15px 0' }}>
          <a
            href="mailto:ritwik15@gmail.com"
            style={{
              color: 'var(--primary-color)',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <FiMail size={20} /> ritwik15@gmail.com
          </a>
        </li>
        <li style={{ margin: '15px 0' }}>
          <a
            href="https://github.com/ritwik15"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--primary-color)',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <FaGithub size={20} /> GitHub
          </a>
        </li>
        <li style={{ margin: '15px 0' }}>
          <a
            href="https://linkedin.com/in/ritwikpradhan15"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--primary-color)',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
