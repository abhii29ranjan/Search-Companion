import React, { Component } from 'react';
import img1 from "./assets/img1.jpg";
import {Redirect} from "react-router-dom"

class MyProfile extends Component {
    constructor()
    {
        super();
        const activeuser=localStorage.getItem("activeuser");
        const activeemail=localStorage.getItem("activeemail");
    let isloggedIn="false";
    let user="";
    let email="";
    if(activeuser!=null)
    {
    isloggedIn="true";
    user=activeuser;
    }
    if(activeemail!=null)
    {
    isloggedIn="true";
    email=activeemail;
    }
    this.state={
    isloggedIn,
    user,
    email
    }
    }
   
    render() { 
        if(this.state.isloggedIn==="false")
        {
            return <Redirect to="/" />
        }
        return ( 

            <div class="card mb-8" style={{width:"90%",margin:"0 auto",marginBottom:"20px"}}>
            <div class="row">
                <div class="col-md-3 mt-5 ml-4">
                <img src={img1} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h2 class="card-title ml-5">Your name:-{this.state.user}</h2>
                    
                    <h3 class="card-text"><b>Your email id:-{this.state.email}</b></h3>
                </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default MyProfile;