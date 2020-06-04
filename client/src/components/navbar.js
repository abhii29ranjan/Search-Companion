import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import "./cardscss.css";

export default class Navbar extends Component
{
  constructor()
  {
      super();
      const activeuser=localStorage.getItem("activeuser");
    let isloggedIn="false";
    let user="";
    if(activeuser!=null)
    {
    isloggedIn="true";
    user=activeuser;
    }
    this.state={
    isloggedIn,
    user
    }
    console.log("ashish",activeuser);
}
  
    
  render()
  { 
    const logout = () =>
  {
    localStorage.removeItem("activeuser");
    localStorage.removeItem("activeemail");
    window.open("/","_self");
  }
    

    return ( 
    <div> 
      
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
              <Link className="navbar-brand link" to="/" style={{color:"yellow"}}><h2>Sangati--:)</h2></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                {this.state.isloggedIn==="true" &&
                  <li className="nav-item active">
                    <Link className="nav-link" to="/home" style={{color:"yellow"}} data-toggle="tooltip" data-placement="bottom" title="Click to go to home page"><h4>Home</h4> <span className="sr-only">(current)</span></Link>
                  </li>
                }
                  
                </ul>
                {this.state.isloggedIn==="false" &&
                <Link className="nav-link active btn btn-outline-info link"  to="/login" data-toggle="tooltip" data-placement="bottom" title="Click to log in">Log In</Link>}
                {this.state.isloggedIn==="false"&&
                <Link className="nav-link active btn btn-outline-info link" to="/signup" data-toggle="tooltip" data-placement="bottom" title="Click for new registration" style={{marginLeft:'40px',marginRight:"40px"}}>Sign Up</Link>}
                {this.state.isloggedIn==="true" &&
                  
                <DropdownButton id="dropdown-basic-button btn-sm" title={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhypFirbu-jMrBQGb-lEZmFNGlV0glfDwtJWEdRF8g79lYmKUC&usqp=CAU" style={{width:"55px",height:"40px"}}/>} style={{marginRight:"20px"}} >
                <span class="badge badge-info"><h5>{this.state.user} </h5></span>  
                <Link to="/myprofile" className="btn btn-outline-success btn -lg" style={{marginLeft:"50px",marginTop:'10px'}}>My profile</Link><br />
                  <button onClick={logout} className="btn btn-danger " style={{marginLeft:"50px",marginTop:"10px"}}>Log Out</button>
                </DropdownButton>

                }
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
          
    </div>
    );
    
    
  }
}