import React, { Component } from 'react';
import "./font.css";
import { Redirect } from 'react-router';
import EnterFriend from "./enterfriend";
import EnterBroker from './enterbroker';
import SearchFriend from './searchFriend';
import SearchBroker from './searchbroker';
let map,infoWindow,pos;
class MyLocation extends Component {

 
  state={
    done:"false"
  }
  
    componentDidMount() {
        this.renderMap()
      }
    
      renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAdoXsJFDaaKFvnN77uy1Ptmuk_Gc5cK7o&callback=initMap")
        window.initMap = this.initMap
      }
    
     
      initMap = () => {
         map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        })
    
         infoWindow = new window.google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
             pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }

            infoWindow.setPosition(pos);
            console.log(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
              var browserHasGeolocation=true;
               pos=  map.getCenter();
              infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed. We could not access your location' :
                              'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
           // this.handleLocationError(true, infoWindow, map.getCenter());
          })
        } else {
            var browserHasGeolocation=false;
               pos=  map.getCenter();
              infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed. We could not access your location' :
                              'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
          
        }
        window.handleLocationError=this.handleLocationError
      }

       handle=() =>
       {
         console.log(pos);
         this.props.findloc(pos);
         this.setState({done:"true"});
       }
    
      render() {
   
        if(this.state.done==="true")
        {
          if(this.props.from==="friend")
          return <EnterFriend  />
          else if(this.props.from==="broker")
          return <EnterBroker />
          else if(this.props.from==="searchfriend")
          return <SearchFriend />
          else if(this.props.from==="searchbroker")
          return <SearchBroker />
        }
        return (
          <main>
          <div>
          <h4>Enable your location..A range of 5 kilometeres from your location will be taken into consideration..Click done buton after your location has been enabled</h4>
          </div>
            <div id="map"></div>
            <button onClick={this.handle} className="btn btn-primary" style={{float:"center",marginLeft:"700px",marginTop:"20px",marginBottom:"20px"}}>Done</button>
          </main>
        )
      }
    }
    
    function loadScript(url) {
      var index  = window.document.getElementsByTagName("script")[0]
      var script = window.document.createElement("script")
      script.src = url
      script.async = true
      script.defer = true
      index.parentNode.insertBefore(script, index)
    }
 
export default MyLocation;