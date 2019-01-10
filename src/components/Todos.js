import React, { Component } from "react"
import Todoitem from "./Todoitem"
import PropTypes from "prop-types"


class Todos extends Component {

    render() {
        // console.log(this.props.todos)
        // use map which is a high order array method
        return this.props.todos.map((todo) => (
            // list should have a key
            <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ))
    }
}
// proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos