import React, { useState } from 'react';
import {
  SiAngular, SiReact, SiNodedotjs, SiPostgresql, SiMongodb, SiAwslambda, SiAwsamplify
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import heroData from '../data/hero';
import projects from '../data/projects';
import experienceData from '../data/experience';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/experiencecard';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('expertise');

  const tabs = [
    { id: 'expertise', label: 'Expertise' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div>
      {/* Compact Header Section */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Profile Image */}
            {heroData.profileImage && (
              <div className="flex-shrink-0">
                <img
                  src={heroData.profileImage}
                  alt={heroData.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover border-4 border-blue-600 dark:border-blue-400 shadow-md"
                />
              </div>
            )}
            
            {/* Profile Info */}
            <div className="flex-grow">
              <p className="text-sm uppercase tracking-widest mb-1 text-gray-600 dark:text-gray-400">
                {heroData.greeting}
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
                {heroData.name}
              </h1>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {Array.isArray(heroData.tagline) ? heroData.tagline[0] : heroData.tagline}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed max-w-2xl">
                {heroData.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-4 sm:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
                    : 'text-gray-700 dark:text-gray-300 border-transparent hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Expertise Tab */}
          {activeTab === 'expertise' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Expertise & Tech Stack
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Over 10 years of experience in building and leading teams in full-stack JavaScript development.
                Primary expertise across the full technology stack:
              </p>

              {/* Skill Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {/* Frontend */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
                    <SiAngular /> Frontend
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2"><SiAngular /> Angular</li>
                    <li className="flex items-center gap-2"><SiReact /> React.js</li>
                  </ul>
                </div>

                {/* Backend */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
                    <SiNodedotjs /> Backend
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2"><SiNodedotjs /> Node.js</li>
                    <li className="flex items-center gap-2"><FaCode /> API Development</li>
                  </ul>
                </div>

                {/* Database */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
                    <SiPostgresql /> Database
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2"><SiPostgresql /> PostgreSQL</li>
                    <li className="flex items-center gap-2"><SiMongodb /> MongoDB</li>
                  </ul>
                </div>

                {/* Cloud */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-3">
                    <SiAwsamplify /> Cloud
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2"><SiAwslambda /> AWS (EC2, Lambda, S3)</li>
                  </ul>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 3a1 1 0 011-1h4a1 1 0 100-2H4a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-4a1 1 0 10-2 0v4a1 1 0 01-1 1H4a1 1 0 01-1-1V3z" />
                    <path d="M7 7a1 1 0 011-1h2V3l4 4-4 4V9H8a1 1 0 01-1-1V7z" />
                  </svg>
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Professional Experience</h2>
              <div className="space-y-6">
                {experienceData.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Skills</h2>
              <Skills />
            </motion.div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
