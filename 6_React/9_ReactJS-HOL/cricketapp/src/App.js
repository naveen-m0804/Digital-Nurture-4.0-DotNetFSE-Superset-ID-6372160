import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  // Set flag to true or false to toggle components
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <h1>Cricket App</h1>
      {/* A button to toggle flag */}
      <button onClick={() => setFlag(!flag)}>Toggle Component</button>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
