import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const EmployeeCard = ({ employee }) => {
  // Consume theme from context (no props)
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`employee-card ${theme}`}
      style={{
        border: '1px solid grey',
        borderRadius: '8px',
        padding: '15px',
        width: '200px',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#eee',
      }}
    >
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
      {/* Theme-dependent button class */}
      <button
        className={`btn-${theme}`}
        style={{
          backgroundColor: theme === 'light' ? '#4CAF50' : '#90ee90',
          color: theme === 'light' ? 'white' : 'black',
          border: 'none',
          padding: '10px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        View Profile
      </button>
    </div>
  );
};

export default EmployeeCard;
