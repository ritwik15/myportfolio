// components/DarkModeToggle.js
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <button 
      onClick={() => setDarkMode(prev => !prev)} 
      style={{
        padding: '10px 20px',
        backgroundColor: darkMode ? '#333' : '#f5f5f5',
        color: darkMode ? '#fff' : '#000',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
