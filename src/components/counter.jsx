import React, { Component } from "react";
class Counter extends Component {
  state = { counter: 1 };

  handleIncrement = () => {
    let increment = this.state.counter;
    increment = increment + 1;
    this.setState({ counter: increment });
  };

  handleDecrement = () => {
    let decrement = this.state.counter;
    decrement = decrement - 1;
    this.setState({ counter: decrement });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>React Sample 1</h1>
          <h2>Counter</h2>

          <span className="badge bg-secondary bg-success">
            {this.state.counter}
          </span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm m-2"
          >
            Incrising
          </button>

          <button
            onClick={this.handleDecrement}
            className="btn btn-secondary btn-sm m-2"
          >
            Decrising
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
