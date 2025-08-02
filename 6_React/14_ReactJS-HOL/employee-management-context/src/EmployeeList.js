import React from 'react';
import EmployeeCard from './EmployeeCard';

const employees = [
  { id: 1, name: 'John Doe', position: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', position: 'UI/UX Designer' },
  { id: 3, name: 'Robert Johnson', position: 'Project Manager' },
];

const EmployeeList = () => {
  return (
    <div>
      <h2>Employee List</h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        {employees.map(emp => (
          // No theme prop here either
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
