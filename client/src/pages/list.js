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
                    <h3 class="card-text">City:-{this.props.city}</h3>
                    <h3 class="card-text">State:-{this.props.mystate}</h3>
                    </div>
                    <div className="row">
                    <h3 class="card-text">Occupation:-{this.props.occ}</h3>
                    <h3 class="card-text">Religion:-{this.props.rel}</h3>
                    <h3 className="card-text">Contact info:-{this.props.con}</h3>
                    </div>
                    <h3 class="card-text">Description:{this.props.des.length>0 ?this.props.des:"Not available"}</h3>
                    <h3 class="card-text">Mail info:- {this.props.email}</h3>
                </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default List;