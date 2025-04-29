import React from "react";
import experience from "../data/experience";
import ExperienceCard from "./experiencecard";
const ProfessionalExperience = () => {
  return (
    <section id="professionalexp" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Professional Experience</h2>

        {/* Experience 1: Team Lead Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experience.map((project, index) => (
            <ExperienceCard key={index} {...project} />
          ))}
        </div>




      </div>
    </section>
  );
};

export default ProfessionalExperience;
