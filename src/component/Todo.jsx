import { Component } from "react";

class Todo extends Component {
  state = {};
  render() {
    return (
      <div className="todo">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Todo;
