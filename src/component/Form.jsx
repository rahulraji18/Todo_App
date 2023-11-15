import React, { Component } from "react";

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
  };
  onHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = () => console.log(this.state);
  render() {
    return (
      <form>
        <h1>Controlled Elements -- React</h1>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={this.onHandleChange}
        ></input>
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={this.onHandleChange}
        ></input>
        <button type="button" onClick={this.onSubmit}>
          Submit
        </button>
      </form>
    );
  }
}
