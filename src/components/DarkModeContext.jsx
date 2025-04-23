import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Persist in localStorage
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Store the dark mode preference in localStorage
    localStorage.setItem('darkMode', darkMode);
    // Apply the dark mode class to the <body>
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Corrected `useDarkMode` hook
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
