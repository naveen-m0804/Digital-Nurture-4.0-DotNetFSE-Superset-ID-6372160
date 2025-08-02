import React from 'react';

function App() {
  // Object for a single office space
  const office = {
    name: 'Downtown Office',
    rent: 55000,
    address: '123 Main St, City Center'
  };

  // List of office objects
  const offices = [
    { id: 1, name: 'Downtown Office', rent: 55000, address: '123 Main St, City Center' },
    { id: 2, name: 'Business Park', rent: 72000, address: '456 Park Ave, Uptown' },
    { id: 3, name: 'Tech Hub', rent: 58000, address: '789 Silicon Blvd, Tech City' },
    { id: 4, name: 'City Plaza', rent: 65000, address: '101 City Plaza, Downtown' }
  ];

  // JSX style object for conditional rent coloring
  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  });

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Image element */}
      <img 
        src="https://cdn.prod.website-files.com/6071145c72cc4375f77ec6fe/608a5e41280332503b903952_5f06e91437181205a8fdf9af_lalala%2520(1).png" 
        alt="Office Space" 
        style={{ width: '400px', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
      />

      {/* Display single office details */}
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '4px' }}>
        <h2>Featured Office</h2>
        <p><strong>Name:</strong> {office.name}</p>
        <p>
          <strong>Rent:</strong> 
          <span style={getRentStyle(office.rent)}> ₹{office.rent.toLocaleString()}</span>
        </p>
        <p><strong>Address:</strong> {office.address}</p>
      </div>

      {/* List of multiple offices */}
      <div style={{ marginTop: '30px' }}>
        <h2>Available Office Spaces</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {offices.map(({ id, name, rent, address }) => (
            <li 
              key={id} 
              style={{ 
                marginBottom: '15px', 
                border: '1px solid #ddd', 
                padding: '10px', 
                borderRadius: '4px' 
              }}
            >
              <p><strong>Name:</strong> {name}</p>
              <p>
                <strong>Rent:</strong> 
                <span style={getRentStyle(rent)}> ₹{rent.toLocaleString()}</span>
              </p>
              <p><strong>Address:</strong> {address}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
