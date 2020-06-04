import React, { Component } from 'react';
import Image from 'react-bootstrap/image'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./result.css";

class Result extends Component {
    
    render() { 
        return ( 
            
            <div class="card mb-3 border-danger rounded-pill"  style={{background:"#04F0DA",width: "2000px",width:"70%",margin:"40px auto",height:"200px",position:"relative"}}>
            <div class="row no-gutters">
              
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center" >Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  
                </div>
              </div>
              <div class="col-md-2" style={{height:"200px",width:"300px",position:"absolute",top:"40px",right:"10px"}}>
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg"  class="card-img rounded-circle res-img" alt="..." />
              </div>
            </div>
          </div>
            
         );
    }
}




 
export default Result;