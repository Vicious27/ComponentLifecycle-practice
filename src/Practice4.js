import React from "react";
import './App.css';

class Practice4 extends React.Component {
  state = {
    goal: 20,
    points: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.points !== this.state.points) {
      console.log("State Changed!")
    }
  }

  addPoint = () => {
    this.setState({ points: this.state.points + 1 });
  };
  resetPoints = () => {
    this.setState({ points: 0 });
    console.clear();
  };
  render() {
    return (
      <div>
        <BarChart points={this.state.points} />
        <h1>Points: {this.state.points}</h1>
        <Controls
          points={this.state.points}
          goal={this.state.goal}
          addPoint={this.addPoint}
          resetPoints={this.resetPoints}
        />
      </div>
    );
  }
}

class BarChart extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.points % 5) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.points !== this.props.points) {
      console.log("Props Changed!")
    }
  }

  render() {
    const barStyles = {
      height: "200px",
      width: "50px",
      border: "1px #ccc solid",
      position: "relative"
    };
    const fillStyles = {
      height: `${this.props.points}0px`,
      width: "50px",
      backgroundColor: "green",
      position: "absolute",
      bottom: "0",
      transition: "height .4s"
    };
    return (
      <div className="bar" style={barStyles}>
        <div className="fill" style={fillStyles} />
      </div>
    );
  }
}

const Controls = props => {
  if (props.points < props.goal) {
    return <button onClick={props.addPoint}>+1 Point</button>;
  } else {
    return (
      <>
        <button disabled>Done!</button>
        <button onClick={props.resetPoints}>Reset</button>
      </>
    );
  }
};

export default Practice4;
