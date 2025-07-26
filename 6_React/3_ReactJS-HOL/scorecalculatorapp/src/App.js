import React from "react";
import "./App.css";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div className="App">
      <h1>Score Calculator App</h1>
    
      <CalculateScore 
        name="Naveen M" 
        school="Saveetha Engineering College" 
        total={450} 
        goal={500} 
      />
    </div>
  );
}

export default App;
