
import React, { Component } from 'react';
import "./font.css";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
class SignUp extends Component {
    state={
        name:"",
        email:"",
        pass:"",
        repass:"",
        message:"",
        hint:""

    }
    render() { 
       /*const changePass=(e)=>
        {
            this.setState({pass:e.target.value,repass:"",message:""});
           // console.log(this.state.pass)
        }*/
        const changeValue = (e) =>
        {
            this.setState({[e.target.name]:e.target.value});
        }
        
       const confirmPass=(e)=>
        {
            this.setState({repass:e.target.value},checkPass)
        }
        const checkPass = () => 
        {
            const len=this.state.repass.length;
            if(this.state.pass[len-1]!=this.state.repass[len-1])
            this.setState({message:"Password is not matching...!!"});
            else
            this.setState({message:""});
            
        }
        const submit= (e) =>
        {
            e.preventDefault();
            var user={
                username:this.state.name,
                email:this.state.email,
                password:this.state.pass,
                hint:this.state.hint
            }
            if(this.state.pass!==this.state.repass)
            {
                alert("Please enter correct password..!!")
            }
            else
            {
            console.log("in submit",user);
            axios.post('/users/add',user)
            .then(res=>{
                alert("You have successfully registered..!!.please login to procees furthur..");

            })
            .catch(error => {
                alert("Sorry..!!!This email id is already registered");
            });
            this.setState({
                name:"",
                email:"",
                pass:"",
                repass:"",
                message:"",
                hint:""

            })
        }
            


        }
        return ( 
            <div className="form">
            <span className="badge badge-danger ml-4" > <h3 style={{float:"right"}}>Please fill up all the fields and click <b>Sign up</b> to register</h3></span>
                <form  onSubmit={submit}>
                <div className="form-group"  >
                <label for="namee" className="header formfield"><b>Name:</b></label>
                <input type="text" class="form-control" id="name" name="name" value={this.state.name} onChange={changeValue} aria-describedby="info" placeholder="Give your name" required />
                </div>
                <div className="form-group"  >
                <label for="exampleInputEmail1" className="header formfield"><b>Email address</b></label>
                <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={this.state.email}onChange={changeValue} aria-describedby="emailHelp" required placeholder="Give your own email address"/>
                </div>
                <div className="form-group">
                <label for="exampleInputPassword1" className="header formfield"><b>Password</b></label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="pass" value={this.state.pass} required value={this.state.pass} onChange={changeValue} placeholder="Give your password"/>
                </div>
                <div className="form-group">
                <label for="exampleInputPassword1" className="header formfield"><b>Confirm Password</b></label><span style={{color:"red",margin:"10px"}}>{this.state.message}</span>
                <input type="password" class="form-control" id="exampleInputPassword1"  required value={this.state.repass} onChange={confirmPass} placeholder="Confirm your password"/> 
                </div>
                <div className="form-group">
                <label className="header formfield" ><b>Hint</b></label>
                <input type="text" class="form-control" name="hint" value={this.state.hint} onChange={changeValue} required placeholder="Give any hint for your password"/>
                </div>
                <button type="submit" class="btn btn-success" >Sign Up</button>
                </form>
            </div>
         );
    }
}
 
export default SignUp;