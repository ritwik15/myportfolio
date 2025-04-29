import React from 'react';

const ExperienceCard = ({ title, company, duration, responsibilities }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md mb-4 transition duration-300 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
        🚀 {title} | {company}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        <strong>Duration:</strong> {duration}
      </p>
      <ul className="list-disc pl-6 mt-4 text-gray-700 dark:text-gray-300 space-y-1">
        {responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
