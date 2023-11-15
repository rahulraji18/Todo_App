import React, { Component } from "react";

export default class UnControlled extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
    };

    this.inputOne = React.createRef();
    this.inputTwo = React.createRef();
  }
  onsubmit = () => {
    console.log({
      firstName: this.inputOne.value,
      lastName: this.inputTwo.value,
    });
  };
  render() {
    return (
      <form>
        <h1>Un Controlled Elements -- DOM</h1>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          ref={(input) => (this.inputOne = input)}
        ></input>
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          ref={(input) => (this.inputTwo = input)}
        ></input>
        <button type="button" onClick={this.onsubmit}>
          Submit
        </button>
      </form>
    );
  }
}
