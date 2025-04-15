import React from 'react';
import { SiAngular, SiReact, SiNodedotjs, SiPostgresql, SiAws, SiJavascript, SiTypescript, SiAwslambda, SiHtml5, SiCss3, SiApachenetbeanside,SiAwsamplify } from 'react-icons/si';

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
    { name: 'API DEVELOPMENT', icon: <SiApachenetbeanside /> }, // Using a general dev icon
  ];

  return (
    <section id="skills" style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h2>Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px', gap: '15px' }}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-chip"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#f1f1f1',
              borderRadius: '30px',
              padding: '10px 20px',
              fontSize: '16px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
