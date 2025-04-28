import React, { useState, useEffect } from 'react';
import { FaMoon, FaBars, FaTimes, FaSun } from 'react-icons/fa';
import { useDarkMode } from './DarkModeContext'; // Adjust path as necessary
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Updated: Use React Router paths
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
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
                 <NavLink
                 key={link.name}
                 to={link.path}
                 className={({ isActive }) =>
                   `font-medium ${ isActive
                    ? 'text-gray-900 dark:text-yellow-300 underline'   // Active link: dark in light mode, yellow in dark mode
                    : 'text-gray-700 dark:text-gray-300 hover:underline' // Inactive link: slightly lighter in both modes
                    // 
                    }`
                 }
                 onClick={() => setIsOpen(false)}
               >
                 {link.name}
               </NavLink>
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
            // Mobile Menu Icon
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

      {/* Mobile Menu */}
      {!isLargeScreen && isOpen && (
        <div className="bg-white dark:bg-gray-800 text-center px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-2 text-blue-600 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
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
