import React from 'react';
import "./App.css";


class Demo extends React.Component {

  render() {
    const name = "React";
    const className = "react";
    return (
      <div className={className}>
        <p>{name}</p>
      </div>
    )
  }
}

export default Demo;