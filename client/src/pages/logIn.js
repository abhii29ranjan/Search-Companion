
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import "./font.css";
import { Redirect } from "react-router-dom";
import img1 from "./front page/images/img4.png";

class LogIn extends Component {
    state={
        hint:"",
        email:"",
        log:"false",
        pass:""
    }
    
     handlesubmit=(e) =>
        {
            axios.get("/users/rec/",{
                params:{
                    email:this.state.email,
                    pass:this.state.pass
                }
            })
            .then(res => {
                this.props.clickData(res.data[0]);
                this.setState({log:"true"});
            })
            .catch(err =>{
                alert("Email id or password did not match..Email id is case sensitive..So please be accurate.");
            });
           // this.props.clickData(this.state.email);
            
            e.preventDefault();
            console.log("in login");
        }
            
        
    
    render() { 
        const repass = (e) => {
            e.preventDefault();
            this.setState({hint:"hello"})
            console.log("hii");
        }
        console.log(this.props.clickData);
        
        const changeEmail = (e) =>
        {
            this.setState({email:e.target.value});
        }
        const changePass = (e) =>
        {
            this.setState({pass:e.target.value});
        }
      
        if(this.state.log==="true")
        {
            window.open("/home","_self");
           // return <Redirect to ="/home" />
        }  
        return ( 
            
            <div className="form ">
            <span className="badge badge-danger ml-4" > <h3 style={{float:"right"}}>Please fill up all the fields and click <b>Log In</b></h3></span>
            <hr style={{color:"solid red"}}/>
            <form  onSubmit={this.handlesubmit}  method="GET">
            <img src={img1} width="250" style={{marginLeft:"250px"}}/>
            <div className="form-group"  >
            <label htmlFor="exampleInputEmail1" className="header formfield" ><b>Email address</b></label>
            <input type="email" className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" onChange={changeEmail} placeholder="Enter your email address"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="header formfield"><b>Password</b></label>
            <input type="password" className="form-control" onChange={changePass} id="exampleInputPassword1" placeholder="Enter your password"/>
            </div>
            <div className="form-group form-check">
                <button  class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" onClick={repass} title="Click if you have forgotten you password" style={{float:"right"}}>Forgot your password?</button>
                
            </div>
            <button type="submit" className="btn btn-success btn-lg" ><b><h3>Log In</h3></b></button>
            </form>
            
        </div>

         );
    }
}
    
 
export default LogIn;