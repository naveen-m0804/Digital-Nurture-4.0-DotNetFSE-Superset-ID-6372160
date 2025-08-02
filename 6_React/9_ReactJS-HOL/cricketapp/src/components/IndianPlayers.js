import React from 'react';

const IndianPlayers = () => {
  // Declare array of players for demonstration
  const players = ['Virat', 'Rohit', 'Jadeja', 'Bumrah', 'Kohli', 'Pant', 'Rahul', 'Dhoni'];

  // Destructuring odd & even indexed players
  const oddPlayers = players.filter((_, index) => index % 2 !== 0);
  const evenPlayers = players.filter((_, index) => index % 2 === 0);
  
  // Declare two arrays of players
  const T20players = ['Hardik', 'Shreyas', 'Iyer'];
  const RanjiTrophyPlayers = ['Shubman', 'Mayank', 'Priyam'];

  // Merge the two arrays
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Odd Team Players</h3>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Team Players</h3>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Merged Players List (T20 + Ranji Trophy)</h3>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
