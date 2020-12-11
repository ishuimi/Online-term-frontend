import React, { Component } from 'react'
import PolicyService from '../../Services/PolicyService';
import axios from 'axios';
class CreatePolicyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
         id:'',   
         description: '',
		 yearsOfPayment: '',
		 amount: '',
		 maturityperiod: '',
		 maturityamount: ''
        }
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeYearsOfPaymentHandler = this.changeYearsOfPaymentHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.changeMaturityperiodHandler = this.changeMaturityperiodHandler.bind(this);
        this.changeMaturityamountHandler = this.changeMaturityamountHandler.bind(this);
        this.savePolicy = this.savePolicy.bind(this);
    }

    savePolicy (e) {
        e.preventDefault();
         var policy = {id:this.state.id, description : this.state.description, yearsOfPayment : this.state.yearsOfPayment, amount: this.state.amount
            , maturityperiod : this.state.maturityperiod, maturityamount : this.state.maturityamount};
        console.log(policy);

        axios.post('http://localhost:8083/api/v1/policy',policy)
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
            this.props.history.push('/home');
    });
  
        
    }
    changeId= (event) => {
        this.setState({id: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeYearsOfPaymentHandler= (event) => {
        this.setState({yearsOfPayment: event.target.value});
    }

    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    changeMaturityperiodHandler= (event) => {
        this.setState({maturityperiod: event.target.value});
    }

    changeMaturityamountHandler= (event) => {
        this.setState({maturityamount: event.target.value});
    }
   

    cancel(){
        this.props.history.push('/policy');
    }

   
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Add Policy</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Policy Id : </label>
                                            <input placeholder="Policy Id" name="policyId" className="form-control" 
                                                value={this.state.id} onChange={this.changeId}/>
                                        </div>
                                   
                                        <div className = "form-group">
                                            <label> Description : </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Years Of Payment: </label>
                                            <input placeholder="Years Of Payment" name="yearsOfPayment" className="form-control" 
                                                value={this.state.yearsOfPayment} onChange={this.changeYearsOfPaymentHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Amount: </label>
                                            <input placeholder="Amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Maturity Period: </label>
                                            <input placeholder="Maturity Period" name="maturityperiod" className="form-control" 
                                                value={this.state.maturityperiod} onChange={this.changeMaturityperiodHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Maturity Amount: </label>
                                            <input placeholder="Maturity Amount" name="maturityamount" className="form-control" 
                                                value={this.state.maturityamount} onChange={this.changeMaturityamountHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.savePolicy}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreatePolicyComponent
