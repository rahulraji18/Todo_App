import React, { PureComponent } from "react";

export default class Loop extends PureComponent {
  state = {
    score: 5,
    data: [
      { id: 1, name: "Rahul R", age: 23 },
      { id: 2, name: "mithun", age: 24 },
    ],
  };
  //Life cycle methods - (3 basics methods)
  componentDidMount() {
    console.log("Welcome");
  }
  componentWillUnmount() {
    console.log("Rendering");
  }

  changeScore = () => {
    this.setState({ score: 10 });
  };

  render() {
    console.log(this.state.score);
    return (
      <div>
        <h1>List</h1>
        <ol>
          {this.state.data.map((value, index) => {
            return (
              <div key={index}>
                <li>{value.name}</li>
              </div>
            );
          })}
        </ol>
        <p>Score: {this.state.score}</p>
        <button type="button" onClick={this.changeScore}>
          Change Score
        </button>
      </div>
    );
  }
}
