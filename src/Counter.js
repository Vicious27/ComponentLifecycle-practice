import React from 'react';
import './App.css';

class Counter extends React.Component {
  state = {
    posts: ["First Post"]
  }

  timerId;

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        posts: [...this.state.posts, "New Post"]
      });
    }, 500);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //stop time after 20 posts
    if (this.state.posts.length >= 20) {
      clearInterval(this.timeId)
    }
    //scroll to bottom of postsContainer
    const postsContainer = document.getElementById("posts");
    postsContainer.scrollTo(
      0,
      postsContainer.scrollHeight
    );
  }

  render() {
    return (
      <div
        id="posts"
        style={{
          overflow: "scroll",
          height: "200px",
          border: "1px lightgray solid"
        }}>
        <ol>
          {this.state.posts.map(post => (
            <li>{post}</li>
          ))}
        </ol>
      </div>
    )
  }
}


export default Counter;