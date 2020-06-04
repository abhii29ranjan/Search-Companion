import React, { Component } from 'react';
import MyCarousel from "./myCarousel";
import Box from "./Box";
import Card from"./frontcard";
import img2 from "./images/card2.jpg";
import img3 from "./images/card3.jpg";
class Sangati extends Component {
    
    render() { 
          return(
             <div>
                <MyCarousel />
                <Box />
                <div className ="container-fluid d-flex justify-content-center">
            
                <div className="row">
                    <div className="col-md-4"  align="left">
                        <Card imgsrc="https://clipartart.com/images/clipart-images-of-a-worried-boy-about-homework-4.jpg" head="Are you worried..??" />
                    </div>
                    <div className="col-md-4" align="right">
                         <Card  imgsrc={img2} head="Just sign up for free..  :)"/>
                      </div>
                    <div className="col-md-4" align="right">
                         <Card  imgsrc={img3} head="Enjoy your life happily..  :)"/>
                      </div>
                      </div>
                    
                     
            </div>
                
            </div>
          );
    }
}
 
export default Sangati;