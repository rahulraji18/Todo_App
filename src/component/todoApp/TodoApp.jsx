import React, { Component } from "react";

export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Todo App</h1>
          <input type="text"></input>
          <button type="button">Add</button>
          <ul className="list">
            <li>Items</li>
          </ul>
        </div>
      </div>
    );
  }
}
