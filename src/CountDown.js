import React from 'react';
import './App.css';

class CountDown extends React.Component {
  state = {
    count: 3
  };

  timerId;

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({ count: this.state.count - 1 })
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.count === 0)
      this.props.toggleTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
    console.log("That's all for tonight!");
  }

  render() {
    return (
      <p>Wait {this.state.count} seconds</p>
    );
  }
};

export default CountDown;