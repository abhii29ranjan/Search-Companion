import React, { Component } from 'react';
import img1 from "./assets/img1.jpg";
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
import PopoverContent from 'react-bootstrap/PopoverContent';
import List from "./list";
class ShowBroker extends Component {

    render() { 
        if(this.props.ans.length==0)
        {
            return(
                <div>
                <span className="badge badge-danger"><h3>Sorry No brokers were found according to your mentioned details..
                We recommend you to modify your location a bit.</h3></span>
                </div>

            );
        }
        return ( 
            <div>
            {['bottom'].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Title as="h3">Filters</Popover.Title>
                      <Popover.Content>
                      <form>
                      <h4>Sort By:- </h4>
                      <input type="radio" id="male" name="gender" value="male" />
                      <label for="male"><b>  Age</b></label><br />
                      <input type="radio" id="female" name="gender" value="female" />
                      <label for="female"><b>  Distance</b></label><br />
                      <button type ="submit" className="btn btn-success">Done</button>
                      </form>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <button variant="secondary" className="bg-info"><img src="https://cdn3.iconfinder.com/data/icons/website-1/128/button15-512.png" width="50px"/></button>
                </OverlayTrigger>
              ))}
          
                  {
                      this.props.ans.map(val=>
                        {
                            return <List des ={val.des} email={val.email} name={val.username} age={val.age} occ={val.occ} city={val.city} mystate={val.mystate} rel={val.rel} con={val.con} /> 
                        })
                  }
            
            </div>
         );
    }
}
 
export default ShowBroker;