import axios from 'axios';
import React, { Component } from 'react';
import {Button,Card,Table,Form,Col} from 'react-bootstrap';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
import MyToast from '../MyToast';


export default class PersonList extends Component{
    constructor(props){
        super(props);
    this.state=this.initialState;
    this.state.show=false;
    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
    
}

initialState={
    amount: '',
    dateOfPayment : '',
    policyNo : '',
    userId:''
}

resetForm=()=>{
    this.setState(()=>this.initialState);
}

onChange(e){
    this.setState({[e.target.name]:e.target.value});
    }
    
    onSubmit=event=>{
       
        
        event.preventDefault();
        const payments={
            amount: this.state.amount,
                dateOfPayment : moment().format("yyyy-MM-DD"),
                policyNo : this.state.policyNo,
                userId:this.state.userId,
                
                

    
        };
        console.log({payments});

        axios.post('http://localhost:8083/api/payment/pay/',payments)
        .then(res=>{
            if(res.data!=null){
                this.setState({"show":true});
                setTimeout(()=>this.setState({"show":false}),3000);
            }
            else{
                this.setState({"show":false});
            }
            console.log(res);
            console.log(res.data);
        
        
    });
    this.setState(this.initialState);
    }

  



    render()
    {
       return( 
           <div>
               <div style={{"display":this.state.show?"block":"none"}}>
                   <MyToast children={{show:this.state.show,message:"Paid Successfully!"}}/>
               </div>
           
       
                <Card className={"border rounded mb-0 border-#EAFDF8 bg-light text- white"}>
                <Card.Header className={"border border-#EAFDF8 bg-light text-black"}><FontAwesomeIcon icon={faPlusCircle}/> Make Payment</Card.Header>
                <Form onReset={this.resetForm} onSubmit={this.onSubmit} id="PaymentForm">
                <Card.Body>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridUserId">
                        <Form.Label>User Id</Form.Label>
                        <Form.Control  type="text" placeholder="User Id" required autoComplete="off" onChange={this.onChange} value={this.state.userId}  name='userId'/>   
                    </Form.Group>
                    <hr></hr>
                    <Form.Group as={Col} controlId="formGridPolicyNo">
                        <Form.Label>Policy Number</Form.Label>
                        <Form.Control type="text" placeholder="Policy No" required autoComplete="off" onChange={this.onChange} value={this.state.policyNo}  name='policyNo'/>   
                    </Form.Group>

                    </Form.Row>
                        <Form.Group controlId="formGridAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="Amount" required autoComplete="off" onChange={this.onChange} value={this.state.amount}  name='amount'/>   
                        </Form.Group>

                    <Form.Row>

                    </Form.Row>
                
                    

                    
                   
                
                
                </Card.Body>
                <Card.Footer style={{"textAlign":"right"}}>
                <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave}/>
                        Pay
                </Button>{' '}

                <Button size="sm" variant="primary" type="reset">
                <FontAwesomeIcon icon={faUndo}/>
                        Reset
                </Button>


                </Card.Footer>
                </Form>
                </Card>
                </div>
        );
    }



}