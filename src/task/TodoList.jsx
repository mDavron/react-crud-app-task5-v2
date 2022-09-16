import React, { Component } from "react";
import { data } from "./Task-mockdata";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    todos: data,
    inputValue: "",
  };
  inputName = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  add = () => {
    if (this.state.inputValue.trim()) {
      var newItem = {
        id: this.state.todos.length + 1,
        title: this.state.inputValue,
        comleted: false,
      };
      this.setState({ todos: [...this.state.todos, newItem] });
    }
    this.setState({ inputValue: "" });
  };

  delete = (id) => {
    const filterItem = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filterItem });
  };

  toggleTodo = (id) => {
    const newTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        console.log(todo.completed);
      }
      return todo;
    });
    this.setState({ todos: newTodo });
  };

  render() {
    return (
      <div className="todo_wrapper">
        <div className="todo_wrapper-title">
          <h2>
            <span>{this.state.todos.length}</span> Tasks
          </h2>
          <h3>
            <span>{this.state.todos.length}</span> Remain
          </h3>
        </div>
        {this.state.todos.length ? (
          <ul>
            {this.state.todos.map((value, index) => {
              const classes = [];
              if (value.completed) {
                classes.push("done");
              }
              return (
                <li key={value.id}>
                  <span className={classes.join("")}>
                    <input
                      type="checkbox"
                      onChange={() => this.toggleTodo(value.id)}
                      checked={value.completed}
                    />
                    {value.title}
                    {index + 1}&nbsp;
                  </span>
                  <button
                    onClick={() => this.delete(value.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2 style={{ color: "crimson", textAlign: "center" }}>No tasks!</h2>
        )}
        <div className="form">
          <input
            value={this.state.inputValue}
            onChange={this.inputName}
            type="text"
            placeholder="Add new item"
          />
          <button onClick={this.add} type="submit">
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;
