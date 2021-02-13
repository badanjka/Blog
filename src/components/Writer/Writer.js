import React, { Component } from 'react';
import "./Writer.css"
import {
    Link
  } from "react-router-dom";

class Writer extends Component {
    render() {
        return (
            <div>
                
                 <Link to={"/authors/"+this.props.writers.id} className="name"> {this.props.writers.name}</Link>
                 <hr></hr> 
            </div>
        );
    }
}

export default Writer;