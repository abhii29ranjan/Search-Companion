import React, { Component } from 'react';
import "./font.css";
import { Redirect } from "react-router-dom";
import MyLocation from "./mylocation";
import axios from "axios";
import MyMap from "./map";
import {Link} from "react-router-dom";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
let obj={
    name:"",
    email:"",
    lat:"",
    lng:"",
    mystate:"",
    rel:"",
    col:"",
    com:"",
    age:"",
    gen:"",
    city:"",
    occ:"",
    des:"",
    con:""
}
class EnterFriend extends Component {
    constructor(props)
    {
        super(props);
        let name=localStorage.getItem("activeuser");
        let email1=localStorage.getItem("activeemail");
        let mystate1=localStorage.getItem("mystate");
        let rel1=localStorage.getItem("rel");
        let city1=localStorage.getItem("city");
        let age1=localStorage.getItem("age");
        let gen1=localStorage.getItem("gen");
        let col1=localStorage.getItem("col");
        let com1=localStorage.getItem("com");
        let occ1=localStorage.getItem("occ");
        let des1=localStorage.getItem("des");
        let con1=localStorage.getItem("con");
        let user=this.props.name;
        let email=this.props.email;
        let mystate="";
        let rel="";
        let city="";
        let flaga="false";
        let flagb="false";
        let age="";
        let gen="";
        let col="";
        let com="";
        let occ="";
        let des="";
        let con="";
        const activeuser=localStorage.getItem("activeuser");
        let login="true";
        if(activeuser==null)
        {
            login="false";
        }
        if(con1!=null)
        {
            con=con1;
        }
        if(occ1!=null)
        {
            occ=occ1;
        }

        if(name!=null)
        {
            console.log("hello",name);
            user=name;
           // console.log(this.state.user);
        }
        if(email1!=null)
        {
            email=email1;
        }
        if(mystate1!=null)
        {
            mystate=mystate1;
        }
        if(city1!=null)
        {
            city=city1;
        }
        if(rel1!=null)
        {
            rel=rel1;
        }
        if(col1!=null)
        {
            col=col1;
        }
        if(com1!=null)
        {
            com=com1;
        }
        if(age1!=null)
        {
            age=age1;
        }
        if(gen1!=null)
        {
            gen=gen1;
        }
        if(des1!=null)
        {
            des=des1;
        }
    this.state= {
        user,
        email,
        mystate,
        lat:"",
        lng:"",
        rel,
        occ,
        res:"",
        flaga,
        flagb,
        col,
        com,
        age,
        gen,
        city,
        des,
        con,
        login,
        done:"false"
    }
        
} 
    myloc = () =>
    {
        localStorage.setItem("user",this.state.user);
        localStorage.setItem("email",this.state.email);
        localStorage.setItem("mystate",this.state.mystate);
        localStorage.setItem("col",this.state.col);
        localStorage.setItem("com",this.state.com);
        localStorage.setItem("rel",this.state.rel);
        localStorage.setItem("city",this.state.city);
        localStorage.setItem("occ",this.state.occ);
        localStorage.setItem("age",this.state.age);
        localStorage.setItem("gen",this.state.gen);
        localStorage.setItem("des",this.state.des);
        localStorage.setItem("con",this.state.con);
        //console.log(this.state.user);
        this.setState({flaga:"true"})
    }
    findloc = (pos) =>
    {
        console.log("in pos",pos.lat,pos.lng);
        this.setState({lat:pos.lat,lng:pos.lng,res:"taken"},() =>{
            console.log("after",this.state.lat,this.state.lng);
            obj.lat=this.state.lat;
            obj.lng=this.state.lng;
            console.log(obj);
        }
        );
    }
    submitform =(e)=>
    {
        e.preventDefault();
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        localStorage.removeItem("mystate");
        localStorage.removeItem("col");
        localStorage.removeItem("com");
        localStorage.removeItem("city");
        localStorage.removeItem("gen");
        localStorage.removeItem("age");
        localStorage.removeItem("rel");
        localStorage.removeItem("occ");
        localStorage.removeItem("des");
        localStorage.removeItem("con");
        obj.email=this.state.email;
        obj.name=this.state.user;
        obj.mystate=this.state.mystate;
        obj.col=this.state.col;
        obj.com=this.state.com;
        obj.city=this.state.city;
        obj.gen=this.state.gen;
        obj.age=this.state.age;
        obj.rel=this.state.rel;
        obj.occ=this.state.occ;
        obj.des=this.state.des;
        obj.con=this.state.con;
        
        console.log("in submit",obj);
        axios.post('/friends/add',obj)
            .then(res=>{
                alert("Your record has been inserted..Thank you..!!")
            })
            .catch(error =>{
                alert("Please fill up all the required fields");
            } );
            this.setState({done:"true"})
    }
     gender=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    map= () =>
    {
        localStorage.setItem("user",this.state.user);
        localStorage.setItem("email",this.state.email);
        localStorage.setItem("mystate",this.state.mystate);
        localStorage.setItem("col",this.state.col);
        localStorage.setItem("com",this.state.com);
        localStorage.setItem("rel",this.state.rel);
        localStorage.setItem("city",this.state.city);
        localStorage.setItem("occ",this.state.occ);
        localStorage.setItem("age",this.state.age);
        localStorage.setItem("gen",this.state.gen);
        localStorage.setItem("des",this.state.des);
        localStorage.setItem("con",this.state.con);
        console.log(this.state.user);
        this.setState({flagb:"true"})
    }   
     render() { 
        if(this.state.login==="false")
        {
            return <Redirect to="/" />
        }
        const changeval = (e)=>
        {
            this.setState({[e.target.name]:e.target.value});
        }
        if(this.state.flaga==="true")
        {
            
            return <MyLocation findloc={this.findloc} from="friend"
             />
        }
        if(this.state.flagb==="true")
        {
            
            return <MyMap findloc={this.findloc} from="friend"
             />
        }
        if(this.state.done==="true")
        {
            return <Redirect to ="/home" />
        }
        console.log("in render",this.state.lat,this.state.lng);
        return ( 
            <div>
            <h2>If you are willing to add yourself so that others can find you then proceed furthur..Mark your location precisely..People can find you within a range of 5 kilometers froom your given location..You can also delete the record later if needed. </h2>
            <div className="form">
            <span className="badge badge-danger ml-4" > <h3 style={{float:"right"}}>Please fill up the required fields and click <b>Submit</b></h3></span>
                <form >
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>Name:</b></label>
                <input type="text" class="form-control" id="name" name="name"  aria-describedby="info" value={this.state.user} disabled  />
                </div>
                <div className="form-group"  >
                <label for="exampleInputEmail1" className="header formfield"><b>Email address</b></label>
                <input type="text" class="form-control" id="exampleInputEmail1" name="email"  aria-describedby="emailHelp" value={this.state.email} disabled/>
                </div>
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>Your Age:</b></label>
                <input type="text" class="form-control" id="name" name="age" required onChange={changeval} aria-describedby="info" value={this.state.age} />
                </div>
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>Gender:</b></label><br />
                <input type="radio" id="male" name="gen"value="male" onClick={this.gender}/>
                <label for="male">Male</label><br />
                <input type="radio" id="female" name="gen" value="female" onClick={this.gender}/>
                <label for="female">Female</label><br />
                <input type="radio" id="other" name="gen" value="other" onClick={this.gender}/>
                <label for="other">Other</label>
                </div>
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>Phone Number:</b></label>
                <input type="text" class="form-control" id="name" name="con" required onChange={changeval} aria-describedby="info" value={this.state.con} />
                </div>
                <div className="form-group">
                <label for="occ" className="header formfield"><b>Current occupation</b></label><br />
                    <select name="occ" onChange={changeval} value={this.state.occ} required>
                        <option>--</option>
                        <option value="job">Job</option>
                        <option value="student">Student</option>
                        <option value="retired">Retired</option>
                        <option value="audi"></option>
                    </select>
                </div>
                <div className="form-group">
                <label for="rel" className="header formfield"><b>Religion</b></label><br />
                    <select name="rel" onChange={changeval} value={this.state.rel} required>
                        <option>---------</option>
                        <option value="hindu">Hindu</option>
                        <option value="muslim">Muslim</option>
                        <option value="sikh">Sikh</option>
                        <option value="christian">Christian</option>
                        <option value="jain">Jain</option>
                    </select>
                </div>
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>City you belong to:</b></label>
                <input type="text" class="form-control" id="name" name="city" required onChange={changeval} aria-describedby="info" value={this.state.city} />
                </div>
                <div className="form-group">
                <label for="mystate" className="header formfield"><b>State you belong to</b></label><br />
                    <select name="mystate" onChange={changeval} value={this.state.mystate} required>
                        <option>-----------------------</option>
                        <option value="Andra Pradesh">Andra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Andaman">Andaman and Nicobar Islands</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Dadra">Dadra & Nagar Haveli and Daman & Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Jammu">Jammu and Kashmir</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Ladakh">Ladakh</option>

                    </select>
                </div>
                
                
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>College in which you are studing currently(optional):</b></label>
                <input type="text" class="form-control" id="name" name="col" onChange={changeval} aria-describedby="info" value={this.state.col}  />
                </div>
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>Company in which u are in(optional):</b></label>
                <input type="text" class="form-control" id="name" name="com"  onChange={changeval}aria-describedby="info" value={this.state.com}  />
                </div>
                <label className="header formfield"><b>Description:</b> </label><br />
                <div className="form-group">
                    <textarea  name="des" value={this.state.des} onChange={changeval} rows="4" cols="50" placeholder=" Write something about you.(optional)">
                    
                    </textarea>
                    <br />
                </div>
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>Area where you will be availailble for the others users</b></label>
                <input type="text" class="form-control" name="res" value={this.state.res} /><br />
                <button className="btn btn-dark mr-5" onClick={this.myloc}> Access my location</button>
                <button  className="btn btn-dark" onClick={this.map}> Mark on a map</button>
                </div>
                <div>
                <button className="btn btn-danger text-center" type="submit" onClick={this.submitform} >Submit</button>
                </div>
                </form>
            </div>
            </div>
         );
    }
}
 
export default EnterFriend;