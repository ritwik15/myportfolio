// src/context/DarkModeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // persist in localStorage
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
        document.body.classList.add('dark-mode'); // 👈 apply to <body>
      } else {
        document.body.classList.remove('dark-mode');
      }
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    return { darkMode, setDarkMode };
  };