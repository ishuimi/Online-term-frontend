import axios from 'axios';
import React, { Component } from 'react';


export default class DeletePayment extends Component{
    constructor(props){
        super(props);
    this.state={
        
        payments:[]
        

    };
    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
}



onChange(e){
    this.setState({receiptNo:e.target.value});
    }
    
    onSubmit=event=>{
        event.preventDefault();

        axios.delete('http://localhost:8083/api/payment/payment/'+this.state.receiptNo)
        .then(res=>{
           if(res.data!=null)
           {
               alert("Deleted");
           }
    });
    }
printlist=()=>
{   
    return 

}
    



    render()
    {
        return(
            
            <div>
                  
            <form onSubmit={this.onSubmit}>
                <label>Reciept No</label>
                <input type='text' name='receiptNo' onChange={this.onChange} value={this.state.value}></input>
                <br></br>
               
                <button type='submit'>Submit</button>
                
                </form>
             
    
                </div>


        );
    }



}

function getbyid(props) {
    return <h1>{this.props.payments.receiptNo}</h1>;
  }