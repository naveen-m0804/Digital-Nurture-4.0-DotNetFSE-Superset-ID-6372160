import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  // Function to generate a random reference number
  const generateReferenceNumber = () => {
    // Example: 'CR-' + 6-digit number
    return 'CR-' + Math.floor(100000 + Math.random() * 900000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeName.trim() || !complaint.trim()) {
      alert('Please fill in both Employee Name and Complaint.');
      return;
    }

    const referenceNumber = generateReferenceNumber();

    alert(`Complaint Registered Successfully!\nReference Number: ${referenceNumber}`);

    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Complaint Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="employeeName" style={{ display: 'block', marginBottom: '5px' }}>
            Employee Name:
          </label>
          <input
            type="text"
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            placeholder="Enter your name"
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="complaint" style={{ display: 'block', marginBottom: '5px' }}>
            Complaint:
          </label>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            rows="5"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            placeholder="Enter your complaint"
          ></textarea>
        </div>
        
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintRegister;
