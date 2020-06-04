import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import "../font.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

class MyCarousel extends Component {
    
    render() { 

          return <div style={{width:"100%",height:"70%", margin:"0 auto" ,marginTop:"10px",marginBottom:"40px",border: "4px solid rgb(14, 15, 0)"}}>
            <Carousel className="slider">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
            
                alt="First slide"
                />
                <div className="slidertitle">
                <span class="badge badge-warning"> <h1>Recently shifted to a new city..??Don't Worry..!!</h1></span>
                </div>
                <div className="textbox">
                <ul>
                <li><h3>We can help you finding new rooms to stay..</h3></li>
                <li><h3>We can suggest you highly experienced brokers of your area..</h3></li>
                <li><h3>You can select according to your convenience..</h3></li>
                </ul>
                </div>
                
            </Carousel.Item>
            <Carousel.Item>  
            <div className ="container">
                <img
                className="d-block w-100"
                src={img2}
                alt="Third slide"
                />
                <div className="slidertitle">
                <span class="badge badge-warning"> <h1>Willing to have roommates..??Don't Worry..!!</h1></span>
                </div>
                <div className="textbox">
                <ul>
                <li><h3>We can help you finding new room companions..</h3></li>
                <li><h3>You can choose according to your own preferences..</h3></li>
                <li><h3>We are always available to counsel you..!! </h3></li>
                </ul>
                </div>

                
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="divcontainer">
                <img
                className="d-block w-100"
                src={img1}
                alt="Third slide"
                
                />
                <div className="slidertitle">
                <span class="badge badge-warning"> <h1>Want to Earn..!!</h1></span>
                </div>
                <div className="textbox">
                <ul>
                <li><h3>Just explore your city..</h3></li>
                <li><h3>If you have good knowledge of any area regarding flats on rent and PGs..</h3></li>
                <li><h3>Help the needy and earn quite good sum..</h3></li>
                </ul>
                </div>
    
                </div>

                
            
            </Carousel.Item>
            </Carousel>
        </div>
    }
}
 
export default MyCarousel;