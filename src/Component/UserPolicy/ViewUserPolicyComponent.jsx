import React, { Component } from 'react'
import axios from 'axios';
import UserPolicyService from '../../Services/UserPolicyService';
import {Button,Card,Table,Form,Col} from 'react-bootstrap';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { faEdit, faList, faTrash } from '@fortawesome/free-solid-svg-icons';

class ViewUserPolicyComponent extends Component
{
    constructor(props) {
       super(props)
        this.state = {
         
            userpolicy: [],
            show:false
           
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onSubmit(event){
        event.preventDefault();

        axios.get('http://localhost:8083/api/v1/userpolicy/'+this.state.userId)
        .then(response=>response.data)
        .then((data)=>{
            this.setState({userpolicy:data})
            this.setState({show:true})
            console.log(this.state.userpolicy)
           
        })
        
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        
        }
render(){
 return (
     
        <div>
            
            <div  style={{"display":this.state.show?"block":"none"}} className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View User Policy Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                        <label>UserPolicy_id: </label>
                        <div> { this.state.userpolicy.userpolicyid }</div>
                    </div>
                    <div className = "row">
                        <label>User_id: </label>
                        <div> { this.state.userpolicy.userid }</div>
                    </div>
                    <div className = "row">
                        <label>Policy_id: </label>
                        <div> { this.state.userpolicy.policyid}</div>
                    </div>
                    <div className = "row">
                        <label>Registered_Date: </label>
                        <div> { this.state.userpolicy.registeredDate}</div>
                    </div>
                    <div className = "row">
                        <label>Amount: </label>
                        <div> { this.state.userpolicy.amount }</div>
                    </div>
                    <div className = "row">
                        <label>Totaltime: </label>
                        <div> { this.state.userpolicy.totalTime }</div>
                    </div>
                    <div className = "row">
                        <label>MonthOver: </label>
                        <div> { this.state.userpolicy.monthOver}</div>
                    </div>
                    <div className = "row">
                        <label>AmountPaid: </label>
                        <div> { this.state.userpolicy.amountPaid}</div>
                    </div>

                </div>

            </div>
            <div style={{"display":this.state.show?"none":"block"}}>
        <Card className={"border border-#EAFDF8 bg-light text-black"}>
        <Card.Header><FontAwesomeIcon icon={faPlusCircle}/>Payment Detail of Reciept</Card.Header>
        <Form onSubmit={this.onSubmit} id="PaymentForm">
        <Card.Body>
            <Form.Row>
            <Form.Group as={Col} controlId="formGridUserId">
                <Form.Label>User Id</Form.Label>
                <Form.Control type="text" placeholder="User Id" onChange={this.onChange} value={this.state.userId}  name='userId'/>  
                </Form.Group>  
            

            </Form.Row>
        </Card.Body>
        <Card.Footer style={{"textAlign":"right"}}>
        <Button variant="primary" type="submit">
                Submit
            </Button>

        </Card.Footer>
        </Form>
        </Card>
        </div>

        </div>
    )
}

}
export default ViewUserPolicyComponent