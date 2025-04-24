import React from 'react';
import {
  SiAngular,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiAwsamplify,
  SiJavascript,
  SiTypescript,
  SiAwslambda,
  SiHtml5,
  SiCss3,
  SiApachenetbeanside,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'AWS', icon: <SiAwsamplify /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'S3', icon: <SiAwslambda /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'API Development', icon: <SiApachenetbeanside /> },
  ];

  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border dark:border-gray-600 px-3 py-1 rounded-full shadow hover:shadow-md transition content-center"
          >
            <span className="text-xl">{skill.icon}</span>
            <span className="text-base font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
