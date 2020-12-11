import React, { Component } from 'react';
import {Navbar,Nav,Form,FormControl,Button,Col, Container} from 'react-bootstrap';
import './nav.css';

class Footer extends Component{
    render(){
        return (

            <>
  <Navbar fixed="bottom" variant="light" className="color-nav">
  <Container>
        
        <Col lg={12} className="text-center text-muted">
            <div>
                All Rights Reserved by Online term Insurance
            </div>
        
        </Col>

        
      </Container>

  </Navbar>
  <br />
  
</>
        );
    }
}
export default Footer;