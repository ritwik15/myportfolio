import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact Me</h2>
      <p className="text-gray-700 mb-8">
        If you’d like to get in touch, feel free to email me or connect on GitHub and LinkedIn:
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="mailto:ritwik15@gmail.com"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-lg transition"
        >
          <FiMail size={20} />
          ritwik15@gmail.com
        </a>

        <a
          href="https://github.com/ritwik15"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-black text-lg transition"
        >
          <FaGithub size={20} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/ritwikpradhan15"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-700 hover:text-blue-900 text-lg transition"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
