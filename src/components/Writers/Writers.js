import React, { Component } from 'react';
import "./Writers.css"
import Writer from "../Writer/Writer"

class Writers extends Component {
  
    renderWriters = () => {
        return <ul className="allOfAuthors">
            {this.props.writers.map(allWriters => <Writer writers={allWriters}></Writer>)}
        </ul>

    }
   
    render() {
        return (
            <div>
                  <div>{this.renderWriters()}</div>
            </div>
        );
    }
}

export default Writers;