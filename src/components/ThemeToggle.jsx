
import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div class= "theme-toggle">
      <label>
        <input 
          type="checkbox" id='btn'
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        {' '}
        Dark Mode
      </label>
    </div>
  );
};

export default ThemeToggle;



