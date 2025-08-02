import React, { useState } from 'react';

const Register = () => {
  // State for form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State for error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Validation rules
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (value.trim().length < 5) {
          error = 'Name must be at least 5 characters long.';
        }
        break;

      case 'email':
        if (!value.includes('@') || !value.includes('.')) {
          error = 'Email must include "@" and "."';
        }
        break;

      case 'password':
        if (value.length < 8) {
          error = 'Password must be at least 8 characters long.';
        }
        break;

      default:
        break;
    }

    return error;
  };

  // Handle input changes and validate each field onChange
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Validate field on change
    const errorMsg = validateField(name, value);

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMsg
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields on submit
    const newErrors = {};

    Object.keys(formData).forEach(field => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
      }
    });

    setErrors(newErrors);

    // Check if there are no errors
    if (Object.keys(newErrors).length === 0) {
      alert('Registration successful!\n' +
        `Name: ${formData.name}\nEmail: ${formData.email}`);
      // Reset form
      setFormData({ name: '', email: '', password: '' });
    } else {
      alert('Please fix validation errors before submitting.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.name && <div style={{ color: 'red', marginTop: '5px' }}>{errors.name}</div>}
        </div>

        {/* Email field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.email && <div style={{ color: 'red', marginTop: '5px' }}>{errors.email}</div>}
        </div>

        {/* Password field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.password && <div style={{ color: 'red', marginTop: '5px' }}>{errors.password}</div>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
