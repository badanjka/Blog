import React, { Component } from 'react';
import OnePost from '../../components/OnePost/OnePost'

class MorePosts extends Component {
    renderMorePosts = () => {
        return <ul className="all">
            {this.props.morePosts.map(ThreePosts => <OnePost morePosts={ThreePosts}></OnePost>)}
        </ul>

    }
  
    render() {
        return (
            <div>
                <h3>Posts from the Author</h3>
                  <div className="threePosts">{this.renderMorePosts()}</div>
            </div>
        );
    }
}

export default MorePosts;