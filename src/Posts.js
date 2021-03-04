import React from 'react';
import "./App.css";


class Posts extends React.Component {
  state = {
    isLoaded: false,
    Posts: []
  }

  componentDidMount() {
    fetch("https://site.com/api/posts")
      .then(response => response.json())
      .then(posts => {
        this.setState({
          posts: posts,
          isLoaded: true
        });
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <ul>
        {this.state.isLoaded ? (
          this.state.posts.map(post => (
            <li key={post.id}>
              {post.title}
            </li>
          ))
        ) : (
            <li>Fetching Posts...</li>
          )}
      </ul>
    )
  }
}

export default Posts;