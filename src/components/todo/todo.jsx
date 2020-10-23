import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoText: "",
    todos: [],
  };

  render() {
    return (
      <div>
        <h5>Simple todo app</h5>

        <div>
          <input
            type="text"
            value={this.state.todoText}
            onChange={this.handleTextChange}
            placeholder="Todo text"
          ></input>
          <button>Add</button>
        </div>
        <div>
          <ul>
            {this.state.todos.map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  handleTextChange = (event) => {
    this.setState({ todoText: event.target.value });
  };
}

export default Todo;


/**
 * homework
 * 
 * read about virtual dom
 * steps:
 * 1 - click on button
 * 2 - console log the text from the state
 * 3 - push that text into the state
 * 4 - clear the input (clear the state.todoText)
 * 5 - map the state.todos to li
 *
 */
