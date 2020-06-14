import React, { Component } from 'react';
import "./font.css";
import { Redirect } from 'react-router';
import EnterFriend from "./enterfriend";
import EnterBroker from './enterbroker';
import SearchFriend from './searchFriend';
import SearchBroker from './searchbroker';
const mykey=process.env.REACT_APP_Google_API_KEY;
let coords;
let location={
  lat:"",
  lng:""
}
class MyMap extends Component {
  state={
    slatt:"",
    slong:""
  }
  
  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${mykey}&callback=initMap`)
    window.initMap = this.initMap
  }


  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 22.5726, lng: 88.3639},
      zoom: 8
    })

    var listener1 = window.google.maps.event.addListener(map,'click',
        function(event)
        {
          addMarker({coords:event.latLng});
          let s=event.latLng.toString();
          console.log(s);
          let pos=s.indexOf(',');
          let ind=s.length;
          let latt=parseFloat(s.slice(1,pos));
          let long=parseFloat(s.slice(pos+1,ind-1));
          console.log(latt,long);
          location.lat=latt;
          location.lng=long;
        })

        
        function addMarker(props){
          var marker=new window.google.maps.Marker({
          position:props.coords,
          map:map
          })
          
        }
  }
  handle = () =>
  {
        
         console.log(location);
         this.props.findloc(location);
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
    //console.log(this.state.activeuser);
    return (
      <main>
      <div>
      <h4>Click on the place where you want yourself to be approached..if you have misplaced the marker we recommend you to refresh the map and mark again..After marking press done button..If you have marked at multiple distances only the last marked location will be accepted as your target location.
      A range of 5 kms from your provided location will be taken into consideration. </h4>
      </div>
        <div id="map"></div>
        <button onClick={this.handle} className="btn btn-success ml-5">Done</button>
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


 
export default MyMap;