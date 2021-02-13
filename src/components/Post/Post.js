import React, { Component } from 'react';
import "./Post.css"
import {
    Link
  } from "react-router-dom";

class Post extends Component {
    render() {
        return (
            <div>
                 <Link to={"/home/"+this.props.posts.id} className="title"> {this.props.posts.title}</Link>                 
                 <div className="description">{this.props.posts.body}</div>    
                 <hr></hr>              
            </div>
        );
    }
}
export default Post;