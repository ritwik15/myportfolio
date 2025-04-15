import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: 'DevLink',
      desc: 'Developer directory app to connect devs by skills.',
      link: '#',
    },
    {
      name: 'TaskFlow',
      desc: 'Kanban-style task manager built with MERN stack.',
      link: '#',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectList.map((proj, index) => (
        <div key={index} className="project-card" data-aos="zoom-in">
          <h3>{proj.name}</h3>
          <p>{proj.desc}</p>
          <a href={proj.link} target="_blank" rel="noreferrer">View Project</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
