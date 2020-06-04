import React, { Component } from 'react';
import "./font.css";
import { Redirect } from "react-router-dom";
import MyLocation from "./mylocation";
import axios from "axios";
import MyMap from "./map";
import {Link} from "react-router-dom";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ShowFriend from './showfriend';
let obj={
    lat:"",
    lng:"",
    mystate:"",
    rel:"",
    col:"",
    com:"",
    gen:"",
    city:"",
    occ:"",
}
class SearchFriend extends Component {
    constructor(props)
    {
        super(props);
        let mystate1=localStorage.getItem("mystate");
        let rel1=localStorage.getItem("rel");
        let city1=localStorage.getItem("city");
        let gen1=localStorage.getItem("gen");
        let col1=localStorage.getItem("col");
        let com1=localStorage.getItem("com");
        let occ1=localStorage.getItem("occ");
        let mystate="";
        let rel="";
        let city="";
        let flaga="false";
        let flagb="false";
        let gen="";
        let col="";
        let com="";
        let occ="";
        const activeuser=localStorage.getItem("activeuser");
        let login="true";
        if(activeuser==null)
        {
            login="false";
        }
        
        if(occ1!=null)
        {
            occ=occ1;
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
        
        if(gen1!=null)
        {
            gen=gen1;
        }
        
    this.state= {
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
        gen,
        city,
        login,
        done:"false",
        ans:[]
    }
        
} 
    myloc = () =>
    {
        localStorage.setItem("mystate",this.state.mystate);
        localStorage.setItem("col",this.state.col);
        localStorage.setItem("com",this.state.com);
        localStorage.setItem("rel",this.state.rel);
        localStorage.setItem("city",this.state.city);
        localStorage.setItem("occ",this.state.occ);
        localStorage.setItem("gen",this.state.gen);
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
        localStorage.removeItem("mystate");
        localStorage.removeItem("col");
        localStorage.removeItem("com");
        localStorage.removeItem("city");
        localStorage.removeItem("gen");
        localStorage.removeItem("rel");
        localStorage.removeItem("occ");
               
        console.log("in submit",obj);
        axios.get('http://localhost:5000/friends/val',{
            params:{
            mystate:this.state.mystate,
            col:this.state.col,
            com:this.state.com,
            city:this.state.city, 
            occ:this.state.occ,
            rel:this.state.rel,
            gen:this.state.gen,
            lat:obj.lat,
            lng:obj.lng
            }
        }
        )
            .then(res=>{
                this.setState({done:"true",ans:res.data})

            })
            .catch(error =>
                {
                alert("Please provide the location");
            });
    }
     gender=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    map= () =>
    {
        localStorage.setItem("mystate",this.state.mystate);
        localStorage.setItem("col",this.state.col);
        localStorage.setItem("com",this.state.com);
        localStorage.setItem("rel",this.state.rel);
        localStorage.setItem("city",this.state.city);
        localStorage.setItem("occ",this.state.occ);
        localStorage.setItem("gen",this.state.gen);
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
            
            return <MyLocation findloc={this.findloc} from="searchfriend"
             />
        }
        if(this.state.flagb==="true")
        {
            
            return <MyMap findloc={this.findloc} from="searchfriend"
             />
        }
        if(this.state.done==="true")
        {
            return <ShowFriend ans={this.state.ans}/>
        }
        console.log("in render",this.state.lat,this.state.lng);
        return ( 
            <div>
            <h2>If you are willing to find a convenient room companion then proceed furthur..Mark your target location precisely..We will find companions within a range of 5 kilometres from your target location.</h2>
            <div className="form">
            <span className="badge badge-danger ml-4" > <h3 style={{float:"right"}}>Fill up the required fields and click <b>Submit</b></h3></span>
                <form >
                
                <div className="form-group">
                <label for="occ" className="header formfield"><b>Current occupation of your companion(optional)</b></label><br />
                    <select name="occ" onChange={changeval} value={this.state.occ}>
                        <option>--</option>
                        <option value="job">Job</option>
                        <option value="student">Student</option>
                        <option value="retired">Retired</option>
                        <option value="audi"></option>
                    </select>
                </div>
                <div className="form-group">
                <label for="rel" className="header formfield"><b>Religion of your companion(optional)</b></label><br />
                    <select name="rel" onChange={changeval} value={this.state.rel}>
                        <option>---------</option>
                        <option value="hindu">Hindu</option>
                        <option value="muslim">Muslim</option>
                        <option value="sikh">Sikh</option>
                        <option value="christian">Christian</option>
                        <option value="jain">Jain</option>
                    </select>
                </div>
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>Gender of your companion(optional):</b></label><br />
                <input type="radio" id="male" name="gen"value="male" onClick={this.gender}/>
                <label for="male">Male</label><br />
                <input type="radio" id="female" name="gen" value="female" onClick={this.gender}/>
                <label for="female">Female</label><br />
                <input type="radio" id="other" name="gen" value="other" onClick={this.gender}/>
                <label for="other">Other</label>
                </div>
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>City where your companion should belong to(optional):</b></label>
                <input type="text" class="form-control" id="name" name="city" onChange={changeval} aria-describedby="info" value={this.state.city} />
                </div>
                <div className="form-group">
                <label for="mystate" className="header formfield"><b>State where companion should belong(optional)</b></label><br />
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
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>

                    </select>
                </div>
                
                
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>College where your companion should be(optional):</b></label>
                <input type="text" class="form-control" id="name" name="col" onChange={changeval} aria-describedby="info" value={this.state.col}  />
                </div>
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>Company where your companion should be(optional):</b></label>
                <input type="text" class="form-control" id="name" name="com"  onChange={changeval}aria-describedby="info" value={this.state.com}  />
                </div>
            
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>Specific location of the your area(required)</b></label>
                <input type="text" class="form-control" name="res" value={this.state.res} /><br />
                <button className="btn btn-dark mr-5" onClick={this.myloc}> Access my location</button>
                <button className="btn btn-dark" onClick={this.map}> Mark on a map</button>
                </div>
                <div>
                <button className="btn btn-danger" type="submit" onClick={this.submitform} >Submit</button>
                </div>
                </form>
            </div>
            </div>
         );
    }
}
 
export default SearchFriend;