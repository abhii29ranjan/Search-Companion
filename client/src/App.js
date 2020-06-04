import React, { Component } from 'react';
import Navbar from "./components/navbar";
import FooterPage from "./components/footer";
import Home from "./pages/Home";
import EnterFriend from "./pages/enterfriend";
import SearchFriend from "./pages/searchFriend";
import SearchBroker from "./pages/searchbroker";
import ShowFriend from "./pages/showfriend";
import EnterBroker from "./pages/enterbroker";
import LogIn from './pages/logIn'
import SignUp from './pages/signUp'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Sangati from "./pages/front page/Sangati";
import Box from "./pages/front page/Box";
import HomeComponent from "./pages/map"
import MyMap from './pages/map';
//import Mylocation from "./components/mylocation";
import MyLocation from './pages/mylocation';
import MyProfile from "./pages/myprofile";

export default class App extends Component
{ 
  state = {
    user:"",
    loggedIn : "false", 
    email:""
  }
  
clickLogin = (val) =>
{
  this.setState({user:val.username,loggedIn:"true",email:val.email})
  localStorage.setItem("activeuser",val.username);
  localStorage.setItem("activeemail",val.email);
  const name=localStorage.getItem("activeuser");
  const mail=localStorage.getItem("activeemail");
  this.setState({user:name,email:mail});
}

  render()
  {
   
  return (
    <BrowserRouter>
      <div>
          <Navbar loggedIn={this.state.loggedIn} />
          
         
          
          <Switch>
            <Route path ="/" exact component ={Sangati} />
            <Route path ="/home" exact render={() => <Home name={this.state.user} clickData={this.clickLogin} />} />
            <Route path ="/login" render ={() => <LogIn clickData={this.clickLogin} />} />
            <Route path ="/signup" component={SignUp} />
            <Route path="/map" component={MyMap} />
            <Route path="/mylocation" component={MyLocation} />
            <Route path="/searchfriend" component={SearchFriend} />
            <Route path="/searchbroker" component={SearchBroker} />
            <Route path="/showfriend" component={ShowFriend} />
            <Route path="/enterfriend" render={() => <EnterFriend name={this.state.user} email={this.state.email}/> } />
            <Route path="/enterbroker" render={() => <EnterBroker name={this.state.user} email={this.state.email}/> } />
            <Route path="/myprofile" render={() => <MyProfile name={this.state.user} email={this.state.email}/>} />
          </Switch>
          <FooterPage />
      </div>
    </BrowserRouter>
    
  ) ;

  }
}