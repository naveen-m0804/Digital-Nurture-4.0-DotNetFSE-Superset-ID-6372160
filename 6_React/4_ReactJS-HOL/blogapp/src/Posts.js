import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ''
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json();
      })
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
        this.setState({ hasError: true, errorMessage: error.message });
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(`An error occurred: ${error.toString()}`);
    this.setState({ hasError: true, errorMessage: error.toString() });
  }

  render() {
    const { posts, hasError, errorMessage } = this.state;

    if (hasError) {
      return <div style={{ color: 'red', fontWeight: 'bold' }}>Error: {errorMessage}</div>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map(post => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        )}
      </div>
    );
  }
}

export default Posts;
