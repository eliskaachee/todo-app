import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../styles/Todos.css";

class Todos extends Component {
  state = {
    hideCompleted: false,
  };
  toggleHideCompleted = () => {
    return this.setState({ hideCompleted: !this.state.hideCompleted });
  };
  render() {
    return (
      <div>
        <div className="hide-completed-wrapper">
          <input type="checkbox" onChange={this.toggleHideCompleted} />
          <p>Hide Completed</p>
        </div>
        {this.props.todos
          .filter((todo) => (this.state.hideCompleted ? !todo.completed : true))
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              markComplete={this.props.markComplete}
              deleteTodo={this.props.deleteTodo}
            />
          ))}
        ;
      </div>
    );
  }
}

export default Todos;
