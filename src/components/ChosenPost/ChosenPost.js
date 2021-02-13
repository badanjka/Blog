import React, { Component } from 'react';
import "./ChosenPost.css"
import MorePosts from "../../components/MorePosts/MorePosts"

class componentName extends Component {
    state = {        
        chosenPost: [],  
        userInfo:[],
        morePosts: []    
    }
    componentDidMount() {         
        this.getData()        
    }   
    getData = () => {     
        console.log(this.props.match.params.id )
        fetch("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id )
          .then(data => data.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                chosenPost: result  

              });  
              this.getUserInfo(result.userId)                     
          },
          )
    } 
    getUserInfo = (userId) => {   
        console.log(userId, 'dole user id');     
          fetch("https://jsonplaceholder.typicode.com/users/" + userId )
            .then(data => data.json())
            .then(
              (result) => {
                console.log("USER DATA");
                  console.log(result)
                this.setState({
                  userInfo: result              
                });     
                this.getThreeMorePosts(userId)
                
             },
            )
      }    
    getThreeMorePosts = (userId) => {   
        console.log(userId, 'dole user id');     
          fetch("https://jsonplaceholder.typicode.com/users/" + userId +"/posts" )
            .then(data => data.json())
            .then(
              (result) => {   
                  let newResult= result.slice(0,3)  
                  console.log(newResult)          
                //   console.log(result)
                this.setState({
                  morePosts: newResult 
                              
                });     
                
                
             },
            )
      }    
    render() {
        return (
            <div>
                <h2>POST</h2>
               <h3>{this.state.chosenPost.title}</h3>
               <h4>{this.state.userInfo.name}</h4>
               <div className="chosenPost">{this.state.chosenPost.body}</div>
               <div className="loremIpsum">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
               <hr></hr>
               <MorePosts morePosts={this.state.morePosts}></MorePosts>
                 
            </div>
        );
    }
}

export default componentName;