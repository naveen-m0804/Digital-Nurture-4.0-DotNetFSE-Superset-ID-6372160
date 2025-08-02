import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,    
      loading: true, 
      error: null    
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ user: data.results[0], loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <p>Loading user data...</p>;
    }

    if (error) {
      return <p>Error fetching user data: {error}</p>;
    }

    const title = user.name.title;
    const firstName = user.name.first;
    const imageUrl = user.picture.large;

    return (
      <div style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'Arial' }}>
        <h2>User Details</h2>
        <img 
          src={imageUrl} 
          alt={`${title} ${firstName}`} 
          style={{ borderRadius: '50%', border: '2px solid #ccc', marginBottom: '15px' }} 
        />
        <p><strong>{title} {firstName}</strong></p>
      </div>
    );
  }
}

export default Getuser;
