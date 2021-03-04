import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div className="todo-item" style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                <p>{title}</p>
                <button onClick={this.props.deleteTodo.bind(this, id)}>X</button>
            </div>
        )
    }
}


export default TodoItem
