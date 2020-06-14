import React, { Component } from 'react';
import img1 from "./assets/img1.jpg";
class List extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="card mb-8" style={{width:"60%",margin:"0 auto",marginBottom:"20px"}}>
            <div class="row">
                <div class="col-md-3 mt-5 ml-4">
                <img src={img1} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                   <h2 class="card-title ml-5">{this.props.name}</h2>
                    <div className="row">
                    <h3 class="card-text"><b>Age:-</b>{this.props.age}</h3>
                    <h3 class="card-text"><b>City:-</b>{this.props.city}</h3>
                    <h3 class="card-text"><b>State:-</b>{this.props.mystate}</h3>
                    </div>
                    <div className="row">
                    { this.props.person==="friends" &&
                    <h3 class="card-text"><b>Occupation:-</b>{this.props.occ}</h3>}
                    {this.props.person==="friends" &&
                    <h3 class="card-text"><b>Religion:-</b>{this.props.rel}</h3>}
                    { this.props.person==="brokers" &&
                    <h3 class="card-text"><b>Price:-</b>{this.props.price}</h3>}
                    {this.props.person==="brokers" &&
                    <h3 class="card-text"><b>Years of experinece:-</b>{this.props.year}</h3>}


                    <h3 className="card-text"><b>Contact info:-</b>{this.props.con}</h3>
                    </div>
                    <h3 class="card-text"><b>Description:</b>{this.props.des.length>0 ?this.props.des:"Not available"}</h3>
                    <h3 class="card-text"><b>Mail info:- </b>{this.props.email}</h3>
                </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default List;