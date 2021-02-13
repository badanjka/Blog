import React, { Component } from 'react';
import WriterDetails from "../WriterDetails/WriterDetail"

class WritersDetails extends Component {
    state = {        
        writersDetails: [],        
    }
    componentDidMount() {         
        this.getData()        
    }   
    getData = () => {     
        console.log(this.props.match.params.id )
        fetch("https://jsonplaceholder.typicode.com/users/"+this.props.match.params.id )
          .then(data => data.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                writersDetails: result              
              });                       
          },
          )
    } 
    render() {
        return (
            <div>                
                   <WriterDetails writersDetails={this.state.writersDetails} />
            </div>
        );
    }
}

export default WritersDetails;