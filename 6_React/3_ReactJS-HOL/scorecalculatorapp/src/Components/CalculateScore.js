import React from "react";
import '../Stylesheets/style.css';  

const CalculateScore = ({ name, school, total, goal }) => {
  const average = total / goal;

  return (
    <div className="score-card">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>College:</strong> {school}</p>
      <p><strong>Total Marks Obtained:</strong> {total}</p>
      <p><strong>Goal Marks:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}</p>
    </div>
  );
};

export default CalculateScore;
