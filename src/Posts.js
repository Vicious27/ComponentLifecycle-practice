import React from 'react';
import './App.css';

class Post extends React.Component {
  state = {
    count: 0
  };

  handleNotReactClick = e => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount() {
    const button = document.getElementById("not-react");
    button.addEventListener("click", this.handleNotReactClick);
    button.innerHTML = "React-Controlled";
  }

  render() {
    return (
      <p>Count:{this.state.count}!</p>
    );
  }
}

export default Post;