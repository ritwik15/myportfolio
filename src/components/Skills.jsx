import React from 'react';

const Skills = () => {
  const skills = ['Angular','React.js', 'Node.js', 'PostgreSQL', 'AWS', 'JavaScript', 'TypeScript', 'S3', 'HTML','CSS'];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
