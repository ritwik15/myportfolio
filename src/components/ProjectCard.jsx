import React from 'react';

const ProjectCard = ({ title, description, tech, achievements }) => (
  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" data-aos="fade-up">
    <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
      <strong>Technologies Used:</strong> {tech}
    </p>
    <p className="text-gray-700 dark:text-gray-300">{achievements}</p>
  </div>
);

export default ProjectCard;