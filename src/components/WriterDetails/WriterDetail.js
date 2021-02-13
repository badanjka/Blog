import React, { Component } from 'react';

class WriterDetail extends Component {
    render() {
        return (
            <div>
               <h3>{this.props.writersDetails.name}</h3> 
               <div>username: {this.props.writersDetails.username}</div> 
               <div>email: {this.props.writersDetails.email}</div> 
               <div>phone: {this.props.writersDetails.phone}</div> 
               <hr></hr>
               <h3>Adress</h3>
               {/* /* <iframe src={`https://maps.google.com/maps?q=${this.props.writersDetails.adress.geo.lat},${this.props.writersDetails.adress.geo.lng}&z=15&output=embed`}
></iframe> 
               <div>street: {this.props.writersDetails.address.street}</div>  */}
               {/* <div>city: {this.props.writersDetails.address.city}</div> 
               <div>zipcode: {this.props.writersDetails.address.zipcode}</div>  */}
                <hr></hr> 
               <h3>Company</h3>
               {/* <div> name: {this.props.writersDetails.company.name}</div> 
               <div> slogan: {this.props.writersDetails.company.catchPhrase}</div>  */}
            </div> 
        );
    }
}

export default WriterDetail;