import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import {Button,Card,Table,ButtonGroup} from 'react-bootstrap';
import Axios from 'axios';


class GetAllPayment extends Component{
    constructor(props){
        super(props);
        this.state={
            payment:[]
        };
    }

    componentDidMount(){
        Axios.get("http://localhost:8083/api/payment/getall")
        .then(response=>response.data)
        .then((data)=>{
            this.setState({payment:data})

        });
    }


    render(){
        return (
                <Card className={"border border-#EAFDF8 bg-light text-black"}>
                    <Card.Header><FontAwesomeIcon icon={faList}/> Payment List</Card.Header>
                
                <Card.Body>
                <Table bordered hover striped variant="light"  className={"text-black"}>
                    <thead>
                        <tr>
                        <th>Reciept Number</th>
                        <th>User Id</th>
                        <th>Policy Number</th>
                        <th>Date of Payment</th>
                        <th>Amount</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.payment.length===0 ?
                       <tr align="center">
                             <td colSpan="6">No Payments made yet.</td>
                       </tr>
                       :

                       this.state.payment.map((payment)=>(
                           <tr key={payment.receiptNo}>
                               <td>{payment.receiptNo}</td>
                               <td>{payment.userId}</td>
                               <td>{payment.policyNo}</td>
                               <td>{payment.dateOfPayment}</td>
                               <td>{payment.amount}</td>
                               <td>
                                   <ButtonGroup>
                                        <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}/></Button>
                                        <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash}/></Button>
                                   </ButtonGroup>
                               </td>

                           </tr>
                       ))
                       
                       }
                    </tbody>
                </Table>
                </Card.Body>
                </Card>
                
        );
    }
}
export default GetAllPayment;