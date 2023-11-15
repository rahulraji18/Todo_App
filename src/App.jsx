import { Component } from "react";
import Todo from "./component/Todo";
import Counter from "./component/Counter";
import Form from "./component/Form";
import UnControlled from "./component/UnControlled";
import Loop from "./component/Loop";

class App extends Component {
  state = {
    name: "rahul",
    description: "coding",
  };
  handleChange = () => {
    let name;
    if (this.state.name === "rahul") {
      name = "mithun";
    } else name = "rahul";
    this.setState({
      name: name,
    });
  };
  render() {
    return (
      <div className="app">
        <Todo />
        <center>
          <Loop />
          <p>--------------------------------------------------------------</p>
          <UnControlled />
          <p>--------------------------------------------------------------</p>
          <Form />
          <p>--------------------------------------------------------------</p>
          <h1>{this.state.description}</h1>
          <button onClick={this.handleChange}>Change name</button>
          <Todo name={this.state.name} />
          <p>--------------------------------------------------------------</p>
          <h1>Events</h1>
          <Counter />
        </center>
      </div>
    );
  }
}

export default App;
