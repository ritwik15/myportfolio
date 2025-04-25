// src/components/Hero.jsx
import React from 'react';

const Hero = ({
  profileImage,
  greeting,
  name,
  tagline,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white text-center px-6 py-20 sm:py-32 rounded-b-3xl shadow-inner dark:shadow-lg">
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        className="w-40 h-40 sm:w-44 sm:h-44 object-cover border-4 border-white rounded-full shadow-xl mb-6 transition-transform duration-500 hover:scale-105"
      />

      <div className="max-w-4xl">
        <p className="text-sm sm:text-base tracking-widest uppercase mb-2 text-white/80 dark:text-white/70">
          {greeting}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-white dark:text-white">
          {name}
        </h1>
        <h2 className="text-lg sm:text-xl font-medium text-white/90 dark:text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
          {tagline}
        </h2>
        <p className="text-white/80 dark:text-white/70 text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto mb-8">
          {description}
        </p>
        <a
          href={buttonLink}
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-transform duration-300 hover:scale-105"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
