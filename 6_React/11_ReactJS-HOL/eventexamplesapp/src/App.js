import React, { useState } from 'react';

function App() {
  // State for counter
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to say hello with static message
  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  // Function that calls increment and sayHello both - to be invoked on Increment button click
  const handleIncreaseClick = () => {
    increment();
    sayHello();
  };

  // Function to decrement count
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Function to say welcome taking argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Function that handles synthetic event on button click
  const handleOnPress = (event) => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Event Examples App</h1>

      {/* Counter Section */}
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={handleIncreaseClick} style={{ marginRight: '10px' }}>
          Increment (Invoke multiple methods)
        </button>
        <button onClick={decrement}>Decrement</button>
      </div>

      {/* Say Welcome Button */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => sayWelcome('Welcome')}>
          Say Welcome
        </button>
      </div>

      {/* Synthetic Event Button */}
      <div style={{ marginTop: '20px' }}>
        {/* React’s synthetic event onClick used */}
        <button onClick={handleOnPress}>
          Click Me (Synthetic Event)
        </button>
      </div>

      {/* Currency Convertor */}
      <div style={{ marginTop: '40px' }}>
        <CurrencyConvertor />
      </div>
    </div>
  );
}

// CurrencyConvertor component
const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  // Conversion rate assumption: 1 EUR = 90 INR (example rate)
  const conversionRate = 90;

  const handleInputChange = (e) => {
    setRupees(e.target.value);
    setEuros(null); // reset euro display on input change
  };

  // Handles the conversion on button click
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rupees === '' || isNaN(rupees)) {
      alert('Please enter a valid number');
      return;
    }
    const convertedValue = (parseFloat(rupees) / conversionRate).toFixed(2);
    setEuros(convertedValue);
  };

  return (
    <div>
      <h2>Currency Convertor (INR to EUR)</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Indian Rupees (₹):
          <input 
            type="text" 
            value={rupees} 
            onChange={handleInputChange} 
            placeholder="Enter amount in INR" 
            style={{ marginLeft: '10px' }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '10px' }}>
          Convert
        </button>
      </form>

      {euros !== null && (
        <p style={{ marginTop: '10px' }}>
          Converted Amount: €{euros}
        </p>
      )}
    </div>
  );
};

export default App;
