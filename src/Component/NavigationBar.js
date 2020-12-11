import React, { Component } from 'react';
import {Navbar,Nav,Form,FormControl,Button,Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav.css';




class NavigationBar extends Component{
  constructor(props){
    super(props);
    this.state={
      
    };


}
  
logout=()=>{
  localStorage.clear();
  window.location.reload();
}

    
    render(){
        return (

            <>
        
  <Navbar className="color-nav" variant="light" >
        <Link to={"home"} className="navbar-brand">
        <FontAwesomeIcon icon={faHome}/> Online Term Insurance
        </Link>
    
    <Nav className="mr-auto">
  <div style={{"display":localStorage.getItem('auth')?"block":"none"}}>        
  <Dropdown >
  <Dropdown.Toggle className="color-nav" variant="info"  >
    Payment
  </Dropdown.Toggle>

  <Dropdown.Menu className={"color-drop"}>
    <Dropdown.Item href={"paymentbyreciept"}  >Check payment by reciept</Dropdown.Item>
    <Dropdown.Item href={"makepayment"}>Make Payment</Dropdown.Item>
    <Dropdown.Item href={"allpayment"}>Get All Payment</Dropdown.Item>
    <Dropdown.Item href={"paymentbyuserId"}>Check all payments made by user</Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>  
  </div>
<hr>
</hr>
<div style={{"display":localStorage.getItem('auth')?"block":"none"}}>  
 <Dropdown>
  <Dropdown.Toggle className="color-nav" variant="info"  >
    Policy
  </Dropdown.Toggle>

  <Dropdown.Menu className={"color-drop"}>
    <Dropdown.Item href={"add-policy"}  >Add Policy</Dropdown.Item>
    <Dropdown.Item href={"policy"}>Show All Policy</Dropdown.Item>
    
    
  </Dropdown.Menu>
  </Dropdown>  
  </div>
  <hr>
  </hr>
  <div style={{"display":localStorage.getItem('auth')?"block":"none"}}>  
 <Dropdown>
  <Dropdown.Toggle className="color-nav" variant="info"  >
   User
  </Dropdown.Toggle>

  <Dropdown.Menu className={"color-drop"}>
    <Dropdown.Item href={"add-user/:userId"}  >Add User</Dropdown.Item>
    <Dropdown.Item href={"user"}>Show All User</Dropdown.Item>
    
    
  </Dropdown.Menu>
  </Dropdown>  
  </div>

  <hr>
</hr>
<div style={{"display":localStorage.getItem('auth')?"block":"none"}}>  
 <Dropdown>
  <Dropdown.Toggle className="color-nav" variant="info"  >
    User Policy
  </Dropdown.Toggle>

  <Dropdown.Menu className={"color-drop"}>
    <Dropdown.Item href={"add-userpolicy"}  >Buy Policy</Dropdown.Item>
    <Dropdown.Item href={"userpolicy"}>Show all Policy</Dropdown.Item>
    <Dropdown.Item href={"view-userpolicy"}>Bought Policy</Dropdown.Item>
    
  </Dropdown.Menu>
  </Dropdown>  
  </div>
  <hr>
</hr>
<div style={{"display":localStorage.getItem('auth')?"block":"none"}}>  
 <Dropdown>
  <Dropdown.Toggle className="color-nav" variant="info"  >
    Medical Test
  </Dropdown.Toggle>

  <Dropdown.Menu className={"color-drop"}>
    <Dropdown.Item href={"add-userdetails/:medicalId"}  >Take test</Dropdown.Item>
    <Dropdown.Item href={"userdetails"}>Candidates passed test</Dropdown.Item>
    
    
  </Dropdown.Menu>
  </Dropdown>  
  </div>
      
    </Nav>
    <Link to={""} className="nav-link text-dark">Login</Link>
    <div style={{"display":localStorage.getItem('auth')?"block":"none"}}>  
    <Link to={""} className="nav-link text-dark" onClick={()=>this.logout()}>Log out</Link>
    </div>
  </Navbar>
  <br />

</>
        );
    }
}
export default NavigationBar