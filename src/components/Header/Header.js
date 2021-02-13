import React, { Component } from 'react';
import "./Header.css"
import {
    Link
  } from "react-router-dom";
  

class Header extends Component {
    render() {
        return (
            <header className="header"> 
                <Link to={"/"} className="bit links">BLOG</Link>
                <div className="pages">
                <Link to={"/home"} className="links">Home</Link>
                <Link to={"/authors"} className="links">Authors</Link>
                <Link to={"/about"} className="links">About</Link>
                </div>           
            </header>
        );
    }
}

export default Header;