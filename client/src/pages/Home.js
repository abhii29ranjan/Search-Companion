import React, { Component } from 'react';
import Card from "../components/cards";
import "../components/cardscss.css";
import {Redirect} from "react-router-dom";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
class Home extends Component {
    constructor()
    {
        super();
        const activeuser=localStorage.getItem("activeuser");
    let login="true";
    if(activeuser==null)
    {
      login="false";
    }
    this.state={
      login,
    }
    console.log("ashish",this.state.login)
    }
    render() {  
        if(this.state.login==="false")
        {
            return <Redirect to="/" />
        }
        const val1="In need of a room compainion in a whole new city??Explore the city with just a click";
        const t1="Find Friends";
        const t2="Find brokers";
        const t3="Are you alone..??";
        const t4="Are you a broker..??"
        const link3="/enterfriend";
        const link4="/enterbroker";
        const link1="/searchfriend";
        const link2="/searchbroker";
        const val2="Could not find a suitable home in new city??..Just relax and let us do the job for you.."
        const val3="Still could not reslove the issue of room companions..??Relax and have patience..Let the other one find you.."
        const val4="Searching for a job and do have great knowledge of your area..??Dont worry..We will help you with your earnings.. "
        return ( 
            <div className ="container-fluid d-flex justify-content-center">
            
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} data={val1} head={t1} link={link1}/>
                    </div>
                    <div className="col-md-4">
                         <Card imgsrc={img2}  data={val2} head={t2} link={link2}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}  data={val3} head={t3} link={link3}/>
                    </div>
                    <div className="col-md-4">
                        <Card  imgsrc={img4} data={val4} head={t4} link={link4}/>
                    </div>
                </div>  
            </div>
         );
    }
}
 
export default Home;