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
    age:"",
    gen:"",
    city:"",
    des:"",
    con:"",
    year:"",
    price:""
}
class EnterBroker extends Component {
    constructor(props)
    {
        super(props);
        let name=localStorage.getItem("activeuser");
        let email1=localStorage.getItem("activeemail");
        let mystate1=localStorage.getItem("mystate");
        let city1=localStorage.getItem("city");
        let age1=localStorage.getItem("age");
        let gen1=localStorage.getItem("gen");
        let des1=localStorage.getItem("des");
        let con1=localStorage.getItem("con");
        let year1=localStorage.getItem("year");
        let price1=localStorage.getItem("price");
        let user=this.props.name;
        let email=this.props.email;
        let mystate="";
        let city="";
        let flaga="false";
        let flagb="false";
        let age="";
        let gen="";
        let des="";
        let con="";
        let year="";
        let price="";
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
        if(year1!=null)
        {
            year=year1;
        }
        if(price1!=null)
        {
            price=price1;
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
        
        res:"",
        flaga,
        flagb,
        
        age,
        gen,
        city,
        des,
        con,
        login,
        done:"false",
        year,
        price,
    }
        
} 
    myloc = () =>
    {
        localStorage.setItem("user",this.state.user);
        localStorage.setItem("email",this.state.email);
        localStorage.setItem("mystate",this.state.mystate);
        localStorage.setItem("city",this.state.city);
        localStorage.setItem("age",this.state.age);
        localStorage.setItem("gen",this.state.gen);
        localStorage.setItem("des",this.state.des);
        localStorage.setItem("con",this.state.con);
        localStorage.setItem("price",this.state.price);
        localStorage.setItem("year",this.state.year);
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
        localStorage.removeItem("city");
        localStorage.removeItem("gen");
        localStorage.removeItem("age");
        localStorage.removeItem("des");
        localStorage.removeItem("con");
        localStorage.removeItem("year");
        localStorage.removeItem("price");
        obj.email=this.state.email;
        obj.name=this.state.user;
        obj.mystate=this.state.mystate;
        obj.city=this.state.city;
        obj.gen=this.state.gen;
        obj.age=this.state.age;
        obj.des=this.state.des;
        obj.con=this.state.con;
        obj.price=this.state.price;
        obj.year=this.state.year;
        
        console.log("in submit",obj);
        axios.post('http://localhost:5000/brokers/add',obj)
            .then(res=>console.log(res.data))
            .catch(error => {
                alert("Plese provide all the required details");
            });
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
        localStorage.setItem("city",this.state.city);
        localStorage.setItem("age",this.state.age);
        localStorage.setItem("gen",this.state.gen);
        localStorage.setItem("des",this.state.des);
        localStorage.setItem("con",this.state.con);
        localStorage.setItem("year",this.state.year);
        localStorage.setItem("price",this.state.price);
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
            
            return <MyLocation findloc={this.findloc} from="broker"
             />
        }
        if(this.state.flagb==="true")
        {
            
            return <MyMap findloc={this.findloc} from="broker"
             />
        }
        if(this.state.done==="true")
        {
            return <Redirect to ="/home" />
        }
        console.log("in render",this.state.lat,this.state.lng);
        return ( 
            <div>
            <h3>If you are a broker and want to earn by suggesting homes to the needy ones..Then proceed by filling up the details below..All your details will be shown to the users..And you will be approached if the user searches a location within a range of 5 kilometers from your entered location so mark your known location precisely..If you have ot insert multiple location you have to fill the form each time..You can even delete any entry later on if you feel so.</h3>
            <div className="form">
            <span className="badge badge-danger ml-4" > <h3 style={{float:"right"}}>Please fill up thi required fields and click <b>Submit</b></h3></span>
                <form >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQW1g9MtKLTfdzvl0k15H-4IpfF-hWXjd0or3wM-xxo3Z-KFw7a&usqp=CAU" width="200" style={{marginLeft:"250px"}}/>
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
                <label for="name" className="header formfield"><b>Rate you are going to charge(in figures):</b></label>
                <input type="text" class="form-control" id="name" name="price" required onChange={changeval} aria-describedby="info" value={this.state.price} />
                </div>
                <div className="form-group"  >
                <label for="name" className="header formfield"><b>Year of experience(in figures):</b></label>
                <input type="text" class="form-control" id="name" name="year" required onChange={changeval} aria-describedby="info" value={this.state.year} />
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
                <button className="btn btn-danger" type="submit" onClick={this.submitform} >Submit</button>
                </div>
                </form>
            </div>
            </div>
         );
    }
}
 
export default EnterBroker;