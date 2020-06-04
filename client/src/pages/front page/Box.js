import React, { Component } from 'react';
import {Link } from "react-router-dom";
class Box extends Component {
    
    render() { 
        return ( 
            <div>
            <div style={{width:"100%", backgroundColor:"#97BCE7",}}>
            <span className="text-center badge badge-warning btn btn-lg" style={{marginLeft:"600px",marginBottom:"40px",marginTop:"20px"}}><h2><u>Few Articles </u></h2></span>
            <span style={{marginLeft:"600px",marginBottom:"40px",marginTop:"20px"}}><h2 style={{color:"brown"}}> <u>Roomates..</u></h2><img src="https://www.umass.edu/admissions/sites/default/files/Roommate.JPG" width="400px" height="200px" /></span>
            
            <p className="ml-2 mr-2">
            Room-mates plays an esential role in moulding the personality and character of a person..A good atmosphere should always prevail around you..
            Choose your flat or room-partner wisely..It will certainly have a huge impact in your future..Here are some tips to find a good match for your roommates..

           
            <a href="https://www.signupgenius.com/college/roommate-questionnaire-best-match.cfm" className=" btn btn-outline-success ml-5 mb-3" style={{color:"green"}}>Click here</a>
            </p>
            <span style={{marginLeft:"600px",marginBottom:"40px",marginTop:"20px"}}><h2 style={{color:"brown"}}> <u>Home..</u></h2><img src="https://media.gettyimages.com/photos/house-picture-id183881669?s=612x612" width="400px" height="200px" /></span>
            
            <p className="ml-2 mr-2">
            No words can describe the importance of home in one's life..Selecting home is also a very crucial aspect as far as livelihood is concerned..
            We recommend you to contact our highly experienced brokers..Hurry up..Here is a link you can go thorugh if you are panning to find a home..
           
            <a href="https://www.bobvila.com/articles/414-house-choosing-checklist/" className=" btn btn-outline-success ml-5 mb-3" style={{color:"green"}}>Click here</a>
            </p>
            </div>
        
            </div>
         );
    }
}
 
export default Box;