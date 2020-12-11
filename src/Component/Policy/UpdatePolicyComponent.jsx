
import React, { Component } from 'react'
import PolicyService from '../../Services/PolicyService';

class UpdatePolicyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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
        this.updatePolicy = this.updatePolicy.bind(this);
    }

    componentDidMount(){
        PolicyService.getPolicyById(this.state.id).then( (res) =>{
            let policy = res.data;
            this.setState({description: policy.description,
            yearsOfPayment : policy.yearsOfPayment,
            amount:policy.amount,
            maturityperiod:policy.maturityperiod,
            maturityamount:policy.maturityamount,
            });
        });
    }

    updatePolicy= (e) => {
        e.preventDefault();
        let policy = {id:this.state.id,description: this.state.description, yearsOfPayment: this.state.yearsOfPayment, amount: this.state.amount,maturiryperiod: this.state.maturiryperiod,maturityamount: this.state.maturityamount,};
        console.log('policy => ' + JSON.stringify(policy));
        console.log('id => ' + JSON.stringify(this.state.id));

        PolicyService.updatePolicy(policy, this.state.id).then( res => {
            this.props.history.push('/policy');
        });
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
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Policy Id: </label>
                                            <input placeholder="Policy Id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Years Of Payment: </label>
                                            <input placeholder=" Years Of Payment" name="yearsOfPayment" className="form-control" 
                                                value={this.state.yearsOfPayment} onChange={this.changeYearsOfPaymentHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Amount: </label>
                                            <input placeholder="Amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Maturityperiod: </label>
                                            <input placeholder="Maturityperiod" name="maturityperiod" className="form-control" 
                                                value={this.state.maturityperiod} onChange={this.changeMaturityperiodHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>"Maturityamount : </label>
                                            <input placeholder="Maturityamount" name="maturityamount" className="form-control" 
                                                value={this.state.maturityamount} onChange={this.changeMaturityamountHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updatePolicy}>Save</button>
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

export default UpdatePolicyComponent

