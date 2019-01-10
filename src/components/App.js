import React, { Component } from "react"
// import Footer from "./Footer"
import Header from "./Header";
// import Main from "./Main"
import Todos from "./Todos";
import AddTodo from './AddTodo'
import About from "./pages/About";
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
    // javascript object
    state = {
        // todos array of objects
        todos: []
    }
    // http requests
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => this.setState({ todos: res.data }))
    }


    markComplete = (id) => {
        // console.log(id)
        // Toggle complete
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }
    // delete todo
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
        // console.log(id)
        // ... is a spread operator

    }
    // add to do

    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
            .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
        // console.log(title)
        // const newTodo = {
        //     id: 4,
        //     title: title,
        //     completed: false
        // }
        // this.setState({ todos: [...this.state.todos, newTodo] })

    }
    render() {
        // console.log(this.state.todos)
        return (
            <Router>
                <div>

                    <Header />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo} />
                            <Todos todos={this.state.todos} markComplete={this.markComplete}
                                delTodo={this.delTodo} />
                        </React.Fragment>)}
                    />
                    <Route path="/about" component={About} >

                    </Route>

                    {/* <Header />
                <Main />
                <Footer /> */}

                </div>
            </Router>

        )
    }
}
export default App