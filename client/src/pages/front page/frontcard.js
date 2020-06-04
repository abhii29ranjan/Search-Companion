import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./frontcardcss.css";
class Card extends Component {
    
    render() { 
        return ( 
            <div className="frontcard text-center border border-warning" >
            <div className="overflow">
            <img src={this.props.imgsrc} alt="image" className="card-img-top" />
            </div>
            <div className="frontcard-body text-dark">
            <h4 className="frontcard-title" style={{color:"blue"}}><u>{this.props.head} </u></h4>
            
            </div>
            </div>
            
         );
    }
}




 
export default Card;