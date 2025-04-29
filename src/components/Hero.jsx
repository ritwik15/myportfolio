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
    <section className="w-full h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-12">
    {/* Background Image with Opacity */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        className="w-full h-full object-cover opacity-40"
      />
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
    </div>
  
    {/* Centered Text Box with Gradient */}
    <div className="relative z-10 max-w-3xl text-center bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 dark:from-blue-700 dark:via-indigo-700 dark:to-violet-800 rounded-xl p-8 sm:p-12 text-white shadow-lg">
      <p className="text-sm uppercase tracking-widest mb-2 text-white/80">
        {greeting}
      </p>
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">{name}</h1>
      <h2 className="text-lg sm:text-xl font-medium mb-4 text-white/90">
        {tagline}
      </h2>
      <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed mb-8">
        {description}
      </p>
      <a
        href={buttonLink}
        className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
      >
        {buttonText}
      </a>
    </div>
  </section>
  

  
  
  
  );
};

export default Hero;
