import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter style={{backgroundColor:"#263238"}} className="font-small pt-4 mt-4 foot sticky-bottom">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
          <span class="badge badge-primary"><h3>Sangati--:)</h3></span>
            <p style={{color:"yellow"}}>
              Any suggestions regarding our work is whole heartedly accepted..Please follow the content for any query.. 
            </p>
          </MDBCol>
          <MDBCol md="6">
          <span class="badge badge-primary" style={{marginLeft:"40px",marginBottom:"20px"}}><h4>Contact us :-</h4></span>
            <ul>
              <li className="list-unstyled">
              <span class="badge badge-light">Phone Number :-</span><span className="badge badge-warning" style={{marginLeft:"10px"}}>6204179153</span>
              </li>
              <li className="list-unstyled">
              <span class="badge badge-light">Mail info :-</span><span className="badge badge-warning" style={{marginLeft:"10px"}}>abhishek29ranjan@gmail.com</span>
              </li>
              
            
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </MDBFooter>
  );
}

export default FooterPage;