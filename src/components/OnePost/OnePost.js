import React, { Component } from 'react';

class OnePost extends Component {
    render() {
        return (
            <div>
                {this.props.morePosts.title}
            </div>
        );
    }
}

export default OnePost;