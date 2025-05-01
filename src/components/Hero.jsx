import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this
import { useTypewriter } from 'react-simple-typewriter';

const Hero = ({
  profileImage,
  greeting,
  name,
  tagline,
  description,
  buttonText,
  buttonLink,
}) => {
  const [text] = useTypewriter({
    words: tagline,            // ✅ Should be an array
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section
      className="w-full h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${profileImage})`,
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-black/40 dark:bg-black/60"></div>

      <div className="relative z-10 max-w-3xl text-center bg-gradient-to-br from-blue-600/80 via-indigo-600/70 to-violet-700/70 dark:from-blue-700/80 dark:via-indigo-700/70 dark:to-violet-800/70 rounded-xl p-8 sm:p-12 text-white shadow-lg">
        <p className="text-sm uppercase tracking-widest mb-2 text-white/80">
          {greeting}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">{name}</h1>
        <h2 className="text-lg sm:text-xl font-medium mb-4 text-white/90">
          <span>{text}</span>
        </h2>
        <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed mb-8">
          {description}
        </p>
        <Link
          to={buttonLink}
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
