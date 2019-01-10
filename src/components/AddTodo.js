import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ""
    }
    // onSubmit
    onSubmit = (e) => {
        // lets prevent it from submiting to actual file
        e.preventDefualt();
        this.props.addTodo(this.state.title);
        // clear the fields
        this.setState({ title: '' });
        // pass state up the chain till app
    }
    // this is component state
    // and it functions witin the component
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    // onSubmit = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }} >
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    style={{ flex: '10', padding: '1rm' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />

            </form>
        )
    }
}

export default AddTodo