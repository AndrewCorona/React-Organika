import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoText: "",
    todos: [],
  };

  handleTextChange = (event) => {
    this.setState({ todoText: event.target.value });
  };

  addSave = () => {
    var addbtn = [...this.state.todos]; //clone || hard copy
    addbtn.push(this.state.todoText);
    this.setState({todos:addbtn, todoText: ""});
  }

  render()  {
    console.log(this.state);
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
          <button
          onClick={this.addSave}>
            Add</button>
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


}

export default Todo;