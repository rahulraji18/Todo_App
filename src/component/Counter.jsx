import { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div className="Container">
        <h1>{this.state.count}</h1>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
