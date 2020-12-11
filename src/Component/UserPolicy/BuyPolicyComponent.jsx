import React, { Component } from 'react'
import UserPolicyService from '../../Services/UserPolicyService';
import { register } from '../../serviceWorker';



class BuyPolicyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            userid: 0,
            policyid: 0,
            registeredDate:'',
            amount:0,
            totalTime:0,
            monthOver:0,
            amountPaid:0
        }

        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changePolicyIdHandler = this.changePolicyIdHandler.bind(this);
        this.saveUserPolicy = this.saveUserPolicy.bind(this);

    }
    saveUserPolicy =(e)=> {
        e.preventDefault(); 
        let userpolicy = {userid: this.state.userid, policyid: this.state.policyid,registeredDate:this.state.registeredDate, amount: this.state.amount,totalTime:this.state.totalTime,monthOver:this.state.monthOver,amountPaid:this.state.amountPaid};
        console.log('userpolicy => ' + JSON.stringify(userpolicy));
        alert("Policy Bought")

        UserPolicyService.createUserPolicy(userpolicy);
    } 

    changeUserIdHandler= (event) => {
        this.setState({userid: event.target.value});
    }

    changePolicyIdHandler= (event) => {
        this.setState({policyid: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

         render() {
        return(
            <div>
                  <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Add UserPolicy</h3>
                            <div className = "card-body">

                            <form>
                                        <div className = "form-group">
                                            <label>Enter your User_Id: </label>
                                            <input placeholder="userid" name="userid" className="form-control" 
                                                value={this.state.userid} onChange={this.changeUserIdHandler} ref={register({ required:true,})}   />
                                        </div>
                                        <div className = "form-group">
                                            <label>Enter your Policy_Id: </label>
                                            <input placeholder="Email Id" name="policyid" className="form-control" 
                                                value={this.state.policyid} onChange={this.changePolicyIdHandler } />
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveUserPolicy}>Buy</button>
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

export default BuyPolicyComponent
    
    
    