import axios from 'axios';
import React, { Component } from 'react';
import {Button,Card,Table,Form,Col} from 'react-bootstrap';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { faEdit, faList, faTrash } from '@fortawesome/free-solid-svg-icons';



export default class GetpaymentDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            payment:[],
            show:false
        };
    
    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
}



onChange(e){
    this.setState({receiptNo:e.target.value});
    }
    
    onSubmit=event=>{
        event.preventDefault();

        axios.get('http://localhost:8083/api/payment/getbyreciept/'+this.state.receiptNo)
        .then(response=>response.data)
        .then((data)=>{
            this.setState({payment:data})
            this.setState({show:true})
            console.log(this.state.payment)
           
    });
    }

    



    render()
    {
        return( 
         <div>
        <div style={{"display":this.state.show?"block":"none"}}>
            <Card className={"border border-#EAFDF8 bg-light text-black"}>
                    <Card.Header><FontAwesomeIcon icon={faList}/> Payment List</Card.Header>
                
                <Card.Body>
                <Table bordered hover striped variant="light" className="text-black">
                    <thead>
                        <tr>
                        <th>Reciept Number</th>
                        <th>User Id</th>
                        <th>Policy Number</th>
                        <th>Date of Payment</th>
                        <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.payment.length===0 ?
                       <tr align="center">
                             <td colSpan="5">No Payments made yet.</td>
                       </tr>
                       :

                       
                           <tr key={this.state.payment.receiptNo}>
                               <td>{this.state.payment.receiptNo}</td>
                               <td>{this.state.payment.userId}</td>
                               <td>{this.state.payment.policyNo}</td>
                               <td>{this.state.payment.dateOfPayment}</td>
                               <td>{this.state.payment.amount}</td>
                               

                           </tr>
                     
                    }  
                       
                    </tbody>
                </Table>
                </Card.Body>
                </Card>
        </div>
       
        <div style={{"display":this.state.show?"none":"block"}}>
        <Card className={"border border-#EAFDF8 bg-light text-black"}>
        <Card.Header><FontAwesomeIcon icon={faPlusCircle}/>Payment Detail of Reciept</Card.Header>
        <Form onSubmit={this.onSubmit} id="PaymentForm">
        <Card.Body>
            <Form.Row>
            <Form.Group as={Col} controlId="formGridReceiptNo">
                <Form.Label>Receipt No</Form.Label>
                <Form.Control type="text" placeholder="Receipt No" onChange={this.onChange} value={this.state.receiptNo}  name='userId'/>   
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

            
          

        );
    }



}

function getbyid(props) {
    return <h1>{this.props.payments.receiptNo}</h1>;
  }