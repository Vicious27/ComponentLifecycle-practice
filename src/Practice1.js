import React from "react";

const Practice1 = () => <Header sitename="React Explained" />;

class Header extends React.Component {
  state = {
    username: "defaultusername"
  };

  static getDerivedStateFromProps(props, state) {
    const newState = {
      username: "Raul Ways"
    }
    return newState;
  }

  render() {
    return (
      < header >
        <h1>{this.props.sitename}</h1>
        <p>Hi {this.state.username}!</p>
      </header >
    );
  }
}

export default Practice1;
