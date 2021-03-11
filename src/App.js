import React from 'react';
import CountDown from './CountDown';
import './App.css';

class App extends React.Component {
  state = {
    displayTimer: false
  };

  toggleTimer = () => {
    this.setState({
      displayTimer: !this.state.displayTimer
    });
  };

  render() {
    return (
      <div>
        {this.state.displayTimer ? (<CountDown toggleTimer={this.toggleTimer} />
        ) : (
          <button onClick={this.toggleTimer}>Start Timer</button>
        )}
      </div>
    );
  }
}


export default App;
