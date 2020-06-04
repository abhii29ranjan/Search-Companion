import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./cardscss.css";
class Card extends Component {
    
    render() { 
        return ( 
            <div className="card text-center border border-warning" >
            <div className="overflow">
            <img src={this.props.imgsrc} alt="image" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
            <h4 className="card-title" style={{color:"blue"}}><u>{this.props.head} </u></h4>
            <p className="card-text" style={{color:"#5F030E"}}>
            {this.props.data}
            </p>
            <Link to={this.props.link} className="btn btn-outline-success"> Click here</Link>
            </div>
            </div>
            
         );
    }
}




 
export default Card;