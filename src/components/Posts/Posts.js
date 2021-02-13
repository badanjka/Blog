import React, { Component } from 'react';
import "./Posts.css"
import Post from "../../components/Post/Post"

class Posts extends Component {
    renderPosts = () => {
        return <ul className="all">
            {this.props.posts.map(allPosts => <Post posts={allPosts}></Post>)}
        </ul>

    }
  
    render() {
        return (
            <div className="text">
               
                  <div className="allPosts">{this.renderPosts()}</div>
            </div>
        );
    }
}

export default Posts;