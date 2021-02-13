import React, { Component } from 'react';
import "./Authors.css"
import Writers from "../../components/Writers/Writers"

class Authors extends Component {
    state = {        
        writers: [],        
    }
    componentDidMount() {         
        this.getData()        
    }
    // printPost = (onePost) => {
    //     console.log("test")
    //         }
    getData = () => {        
        fetch("https://jsonplaceholder.typicode.com/users" )
          .then(data => data.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                writers: result              
              });                       
          },
          )
    } 
    render() {
        return (
            <div>
                <h2>AUTHORS</h2>
                <Writers writers={this.state.writers} />
            </div>
        );
    }
}

export default Authors;