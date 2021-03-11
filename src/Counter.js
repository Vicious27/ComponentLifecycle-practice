import React from 'react';
import './App.css';

class Counter extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 500)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count % 2) {
      return false;
    }
    else {
      return true;
    }
  }

  render() {
    return (
      <Header count={this.state.count} />
    )
  }
}

const Header = props => (
  <p>{props.count}</p>
)


export default Counter;