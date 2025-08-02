import React, { useState } from 'react';

// GuestPage component shows flight details
const GuestPage = () => {
  const flights = [
    { id: 1, flightNumber: 'AI202', from: 'New York', to: 'London', time: '10:00 AM' },
    { id: 2, flightNumber: 'BA310', from: 'London', to: 'Paris', time: '12:30 PM' },
    { id: 3, flightNumber: 'EK450', from: 'Dubai', to: 'Mumbai', time: '9:00 PM' },
  ];

  return (
    <div>
      <h2>Welcome Guest! Browse Flights</h2>
      <ul>
        {flights.map(({id, flightNumber, from, to, time}) => (
          <li key={id} style={{ marginBottom: '10px' }}>
            <strong>{flightNumber}</strong>: {from} → {to} at {time}
          </li>
        ))}
      </ul>
      <p>Please login to book tickets.</p>
    </div>
  );
};

// UserPage component to book tickets
const UserPage = () => {
  const [selectedFlight, setSelectedFlight] = useState('');
  const flights = [
    { id: 1, flightNumber: 'AI202', from: 'New York', to: 'London', time: '10:00 AM' },
    { id: 2, flightNumber: 'BA310', from: 'London', to: 'Paris', time: '12:30 PM' },
    { id: 3, flightNumber: 'EK450', from: 'Dubai', to: 'Mumbai', time: '9:00 PM' },
  ];

  const handleBooking = () => {
    if (selectedFlight === '') {
      alert('Please select a flight to book.');
    } else {
      alert(`Ticket booked for flight ${selectedFlight}`);
      setSelectedFlight('');
    }
  };

  return (
    <div>
      <h2>User Page: Book Your Ticket</h2>
      <label>
        Select a flight:{' '}
        <select 
          value={selectedFlight} 
          onChange={(e) => setSelectedFlight(e.target.value)}
        >
          <option value="">-- Select --</option>
          {flights.map(({ id, flightNumber, from, to, time }) => (
            <option key={id} value={flightNumber}>
              {flightNumber}: {from} → {to} at {time}
            </option>
          ))}
        </select>
      </label>
      <br /><br />
      <button onClick={handleBooking}>Book Ticket</button>
    </div>
  );
};


// Main App component controls login/logout and conditional rendering based on login state
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Ticket Booking App</h1>

      <div style={{ marginBottom: '20px' }}>
        {!loggedIn ? (
          <button onClick={() => setLoggedIn(true)}>Login</button>
        ) : (
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        )}
      </div>

      {/* Conditionally render GuestPage or UserPage */}
      {loggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
