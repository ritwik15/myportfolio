import React from 'react';
import {
  SiAngular, SiReact, SiNodedotjs, SiPostgresql, SiMongodb, SiAwslambda, SiAwsamplify
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-white dark:bg-gray-900 rounded-xl shadow-md max-w-6xl mx-auto mb-10"
    >
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
        About Me
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
        I have over 10 years of experience in building and leading teams in full-stack JavaScript development.
        My primary expertise lies in:
      </p>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6 text-left">
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
            <SiAngular /> Frontend
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2"><SiAngular /> Angular</li>
            <li className="flex items-center gap-2"><SiReact /> React.js</li>
          </ul>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
            <SiNodedotjs /> Backend
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2"><SiNodedotjs /> Node.js</li>
            <li className="flex items-center gap-2"><FaCode /> API Development</li>
          </ul>
        </div>

        {/* Database */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
            <SiPostgresql /> Database
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2"><SiPostgresql /> PostgreSQL</li>
            <li className="flex items-center gap-2"><SiMongodb /> MongoDB</li>
          </ul>
        </div>

        {/* Cloud */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
            <SiAwsamplify /> Cloud
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2"><SiAwslambda /> AWS (EC2, Lambda, S3)</li>
          </ul>
        </div>
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-10 text-center">
        Currently, I am focusing on mastering <span className="font-semibold text-blue-600 dark:text-blue-400">React.js</span>,
        improving <span className="font-semibold text-blue-600 dark:text-blue-400">JavaScript/Node.js</span> coding challenge skills,
        and preparing for interviews.
      </p>
      <motion.div
  className="mt-10 flex justify-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <a
    href="/resume.pdf"
    download
    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
  >
    {/* Icon SVG */}
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 3a1 1 0 011-1h4a1 1 0 100-2H4a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-4a1 1 0 10-2 0v4a1 1 0 01-1 1H4a1 1 0 01-1-1V3z" />
      <path d="M7 7a1 1 0 011-1h2V3l4 4-4 4V9H8a1 1 0 01-1-1V7z" />
    </svg>
    Download Resume
  </a>
</motion.div>

    </section>
  );
};

export default About;
