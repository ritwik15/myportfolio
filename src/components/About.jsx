import React from 'react';
import { SiAngular, SiReact, SiNodedotjs, SiPostgresql, SiMongodb, SiAwslambda, SiAwsamplify } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white rounded-xl shadow-md max-w-6xl mx-auto mb-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">About Me</h2>
      
      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
        I have over 10 years of experience in building and leading teams in full-stack JavaScript development.
        My primary expertise lies in:
      </p>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6 text-left">
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2 mb-3">
            <SiAngular /> Frontend
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><SiAngular /> Angular</li>
            <li className="flex items-center gap-2"><SiReact /> React.js</li>
          </ul>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2 mb-3">
            <SiNodedotjs /> Backend
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><SiNodedotjs /> Node.js</li>
            <li className="flex items-center gap-2"><FaCode /> API Development</li>
          </ul>
        </div>

        {/* Database */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2 mb-3">
            <SiPostgresql /> Database
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><SiPostgresql /> PostgreSQL</li>
            <li className="flex items-center gap-2"><SiMongodb /> MongoDB</li>
          </ul>
        </div>

        {/* Cloud */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2 mb-3">
            <SiAwsamplify /> Cloud
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><SiAwslambda /> AWS (EC2, Lambda, S3)</li>
          </ul>
        </div>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mt-10 text-center">
        Currently, I am focusing on mastering <span className="font-semibold text-blue-600">React.js</span>, improving <span className="font-semibold text-blue-600">JavaScript/Node.js</span> coding challenge skills,
        and preparing for interviews.
      </p>
    </section>
  );
};

export default About;
