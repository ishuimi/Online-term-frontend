import React, { Component } from 'react'
import UserPolicyService from '../../Services/UserPolicyService';

class UpdateUserPolicyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            userpolicyid: this.props.match.params.userpolicyid,
            userid: 0,
            policyid: 0,
            registeredDate:'',
            amount:0,
            totalTime:0,
            monthOver:0,
            amountPaid:0
        }
       this.changeTotaltimeHandler = this.changeTotaltimeHandler.bind(this);
        this.updateUserPolicy = this.updateUserPolicy.bind(this);

    }
    componentDidMount(){
        UserPolicyService.getUserPolicyById(this.state.userpolicyid).then( (res) =>{
            let userpolicy = res.data;
            this.setState({userid: userpolicy.userid,policyid: userpolicy.policyid,registeredDate:userpolicy.registeredDate,amount:userpolicy.amount,
                totalTime: userpolicy.totalTime,monthOver:userpolicy.monthOver,
                amountPaid: userpolicy.amountPaid
            });
        });
    }

    updateUserPolicy = (e) => {
        e.preventDefault();
        let userpolicy = { userid:this.state.userid, policyid: this.state.policyid,registeredDate:this.state.registeredDate,amount:this.state.amount, totalTime: this.state.totalTime, monthOver: this.state.monthOver,amontPaid:this.state.amountPaid};
        console.log('userpolicy => ' + JSON.stringify(userpolicy));
        console.log('userpolicyid => ' + JSON.stringify(this.state.userpolicyid));

        UserPolicyService.updateUserPolicy(userpolicy, this.state.userpolicyid).then( res =>{
            this.props.history.push('/userpolicy');
            })
    }   

  
    changeTotaltimeHandler= (event) => {
        this.setState({totalTime: event.target.value});
    }



    cancel(){
        this.props.history.push('/userpolicy');
    }

         render() {
        return(
            <div>
                  <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Update UserPolicy</h3>
                            <div className = "card-body">

                            <form>
                            <div className = "form-group">
                                            <label>Totaltime: </label>
                                            <input placeholder="Totaltime" name="totalTime" className="form-control" 
                                                value={this.state.totalTime} onChange={this.changeTotaltimeHandler} />
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUserPolicy}>Save</button>
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

export default UpdateUserPolicyComponent