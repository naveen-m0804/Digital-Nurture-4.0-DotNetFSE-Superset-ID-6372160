import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeeList from './EmployeeList';

function App() {
  // Theme state: can be light or dark
  const [theme, setTheme] = useState('light');

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app-container ${theme}`} style={{ padding: '20px' }}>
        <h1>Employee Management Application</h1>
        <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>

        {/* No theme prop passed */}
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
