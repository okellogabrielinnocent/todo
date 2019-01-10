import React from "react";
import "../index.css";
import { Link } from 'react-router-dom';


function Header() {
    // const firstName = "Gabriel"
    // return <div className="navbar">
    //     <h2>Best coding ever {firstName}</h2>
    // </div>
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/About">About</Link>
        </header>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rm'
}
const linkStyle = {
    color: '#fff',
    textDocoration: 'none'
}
export default Header