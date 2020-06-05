import React, { Component } from 'react';
import "./font.css";
import { Redirect } from "react-router-dom";
import MyLocation from "./mylocation";
import axios from "axios";
import MyMap from "./map";
import {Link} from "react-router-dom";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ShowBroker from './showbroker';
let obj={
    lat:"",
    lng:"",
    mystate:"",
    city:"",
    res:"",
}
class SearchBroker extends Component {
    constructor(props)
    {
        super(props);
        let mystate1=localStorage.getItem("mystate");
        let city1=localStorage.getItem("city");
        let mystate="";
        let city="";
        let flaga="false";
        let flagb="false";
        const activeuser=localStorage.getItem("activeuser");
        let login="true";
        if(activeuser==null)
        {
            login="false";
        }
        
        

        
        if(mystate1!=null)
        {
            mystate=mystate1;
        }
        if(city1!=null)
        {
            city=city1;
        }
        
        
    this.state= {
        mystate,
        lat:"",
        lng:"",
        res:"",
        flaga,
        flagb,
        city,
        login,
        done:"false",
        ans:[]
    }
        
} 
    myloc = () =>
    {
        localStorage.setItem("mystate",this.state.mystate);
        
        localStorage.setItem("city",this.state.city);
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
            obj.res="TAKEN";
            console.log(obj);
        }
        );
    }
    submitform =(e)=>
    {
        e.preventDefault();
        localStorage.removeItem("mystate");
        localStorage.removeItem("city");
               
        console.log("in submit",obj);
        axios.get('/friends/val',{
            params:{
            mystate:this.state.mystate,
            city:this.state.city, 
            lat:obj.lat,
            lng:obj.lng
            }
        }
        )
            .then(res=>{
                this.setState({done:"true",ans:res.data})

            })
            .catch(error => {
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
        localStorage.setItem("city",this.state.city);
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
            
            return <MyLocation findloc={this.findloc} from="searchbroker"
             />
        }
        if(this.state.flagb==="true")
        {
            
            return <MyMap findloc={this.findloc} from="searchbroker"
             />
        }
        if(this.state.done==="true")
        {
            return <ShowBroker ans={this.state.ans}/>
        }
        console.log("in render",this.state.lat,this.state.lng);
        return ( 
            <div>
            <h3>If you are finding a broker at a particular location..Please fill up the details of your area and proceed furthur..We will get the brokers for you who are within a range of 5 kilometrers from your marked location..So please be precise.Filters are also mentioned below if you want any..</h3>
            <div className="form">
            <span className="badge badge-danger ml-.5" > <h3 style={{float:"right"}}>Fill up the required fields and click <b>Submit</b></h3></span>
                <form >
                
                
                
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>City(optional):</b></label>
                <input type="text" class="form-control" id="name" name="city" onChange={changeval} aria-describedby="info" value={this.state.city} />
                </div>
                <div className="form-group">
                <label for="mystate" className="header formfield"><b>State(optional)</b></label><br />
                    <select name="mystate" onChange={changeval} value={this.state.mystate}>
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
                    <div className="form-group"  >
                <label for="name" className="header formfield"><b>Specific location of the area:-(required)</b></label>
                <input type="text" class="form-control" name="res" value={obj.res} required/><br />
                <button className="btn btn-dark mr-5" onClick={this.myloc}> Access my location</button>
                <button className="btn btn-dark" onClick={this.map}> Mark on a map</button>
                </div>
                <div></div>
                <button className="btn btn-danger" type="submit" onClick={this.submitform} >Submit</button>
                </div>
                </form>
            </div>
            </div>
         );
    }
}
 
export default SearchBroker;