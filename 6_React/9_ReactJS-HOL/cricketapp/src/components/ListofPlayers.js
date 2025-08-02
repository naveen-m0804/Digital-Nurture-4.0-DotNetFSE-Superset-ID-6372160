import React from 'react';

const ListofPlayers = () => {
  // Declare an array of 11 players with name and scores
  const players = [
    { name: 'Player1', score: 85 },
    { name: 'Player2', score: 65 },
    { name: 'Player3', score: 70 },
    { name: 'Player4', score: 55 },
    { name: 'Player5', score: 90 },
    { name: 'Player6', score: 45 },
    { name: 'Player7', score: 75 },
    { name: 'Player8', score: 30 },
    { name: 'Player9', score: 80 },
    { name: 'Player10', score: 60 },
    { name: 'Player11', score: 95 }
  ];

  // Filter players with scores below 70 using arrow function
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>

      <h3>Players with scores below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
