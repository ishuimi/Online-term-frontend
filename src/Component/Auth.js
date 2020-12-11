import axios from 'axios';
import React, { Component } from 'react';
import {Button,Card,Table,Form,Col} from 'react-bootstrap';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {Redirect} from 'react-router-dom';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state={
            login:[],
            show:false
        };
    
    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
}



onChange(e){
    this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=event=>{
        event.preventDefault();

        axios.get('http://localhost:8083/api/Login/login/'+this.state.username+'/'+this.state.password)
        .then(response=>response.data)
        .then((data)=>{
            this.setState({login:data})
            this.setState({show:true})
            console.log(this.state.login)
            if(!this.state.login){
                
                <Redirect to='/'/>
                alert("Wrong Password or User Name")
                window.location.reload();
             
                
                }
                else{
        
                    localStorage.setItem('auth',this.state.login.password);
                    window.location.reload();
                    
                }    
            
            
           
    });
    
    }

    
    render()
    {
        
        return(
            <div>
            {
                localStorage.getItem('auth')?<Redirect to='/home'/>:null
            }

            <Card className={"border border-#EAFDF8 bg-light text-black"}>
            <Card.Header><FontAwesomeIcon icon={faPlusCircle}/>Login</Card.Header>
            <Form onSubmit={this.onSubmit} id="LoginForm">
            <Card.Body>
                <Form.Row>
                
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={this.onChange} value={this.state.username}  name='username'/>  
                    
                 
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.onChange} value={this.state.password}  name='password'/> 
            
    
                </Form.Row>
            </Card.Body>
            <Card.Footer style={{"textAlign":"right"}}>
            <Button variant="primary" type="submit">
                    Login 
                </Button>
    
            </Card.Footer>
            </Form>
            </Card>
            </div>
        );
    }
}
export default Auth;