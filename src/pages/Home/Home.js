import React, { Component } from 'react';
import "./Home.css"
import Posts from "../../components/Posts/Posts"

class Home extends Component {
    state = {        
        posts: [],
             
    }
    componentDidMount() {         
        this.getData()        
    }
    // printPost = (onePost) => {
    //     console.log("test")
    //         }
    getData = () => {        
        fetch("https://jsonplaceholder.typicode.com/posts" )
          .then(data => data.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                posts: result              
              });    
              
              
           },
          )
    }    
   
    render() {
        return (
            <>
            <h2>POSTS</h2>
              <Posts posts={this.state.posts} />             
            </>
        );
    }
}
export default Home;