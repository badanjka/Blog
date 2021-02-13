import React, { Component } from 'react';
import "./MainPage.css";



class MainPage extends Component {
    state={
        title:"",
        body:""
    }
    handleTitleChange=(e)=> {
        console.log(e.target.value)
        this.setState({
            title: e.target.value
        });
    }
    handleBodyChange=(e)=> {
        this.setState({
            body: e.target.value
        });
    }
    handleDownload = () => {
        console.log(this.state.title)
        fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body: JSON.stringify({
        title: this.props.title,
        body: this.props.body,
        userId: 1,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
    render() {
        return (
            
             <div className="newPost">
                 <h1>NEW POST</h1>
                <div className="form">
                    <label className=" label">Title </label> <br></br>
                    <input type="text" placeholder="Post title" className="post" onChange={this.handleTitleChange}></input>           
                    <label className=" label">Content</label> <br></br>
                    <textarea type="text" placeholder="Write your post here" className="content" rows="10" onChange={this.handleBodyChange}></textarea>
                    <span className="buttons">
                        <button className="button" onClick={this.handleDownload}>Save</button>
                        <button className="button">Cancel</button>            
                    </span>            
                </div>
             </div>
               
          
        );
    }
}

export default MainPage;