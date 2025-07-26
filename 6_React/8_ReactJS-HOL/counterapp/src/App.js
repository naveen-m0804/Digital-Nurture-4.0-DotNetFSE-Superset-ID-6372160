import React from 'react';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0,
    };
  }

  UpdateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1,
    }));
  };

  UpdateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
        <h1>People Counter</h1>
        <p>Number of people entered: {this.state.entryCount}</p>
        <p>Number of people exited: {this.state.exitCount}</p>
        <button 
          onClick={this.UpdateEntry} 
          style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer' }}>
          Login
        </button>
        <button 
          onClick={this.UpdateExit} 
          style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Exit
        </button>
      </div>
    );
  }
}

export default CountPeople;
