import React, { useState, useEffect } from 'react';
import { FaMoon, FaBars, FaTimes, FaSun } from 'react-icons/fa';
import { useDarkMode } from './DarkModeContext'; // Adjust path as necessary

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Correct usage of context
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isLargeScreen = windowWidth >= 1024;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="text-2xl font-bold text-blue-600 dark:text-white">Ritwik</div>

          {/* Desktop Menu */}
          {isLargeScreen ? (
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-blue-600 dark:text-white font-medium hover:underline"
                >
                  {link.name}
                </a>
              ))}
              {/* Dark Mode Toggle */}
              <button onClick={toggleDarkMode} className="text-xl">
                {darkMode ? (
                  <FaSun className="text-yellow-500 dark:text-white" />
                ) : (
                  <FaMoon className="text-gray-800 dark:text-white" />
                )}
              </button>
            </div>
          ) : (
            // Mobile Menu
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl text-blue-600 dark:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu (only visible when open) */}
      {!isLargeScreen && isOpen && (
        <div className="bg-white dark:bg-gray-800 text-center px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-blue-600 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(false)} // Close menu after clicking a link
            >
              {link.name}
            </a>
          ))}
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="mt-4 text-xl">
            {darkMode ? (
              <FaSun className="text-yellow-500 dark:text-white" />
            ) : (
              <FaMoon className="text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
