import React, { Component } from "react"
import PropTypes from "prop-types"

class Todoitem extends Component {
    itemStyle() {
        return {
            backgroundColor: '#f4f4f4f4',
            padding: "1rm",
            borderBottom: "0.1rm #ccc dotted",
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.itemStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>

        )
    }
}

const btnStyle = {
    background: "#ff0000",
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'

}
// proptypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default Todoitem