import React, { Component } from 'react'
import UserPolicyService from  '../../Services/UserPolicyService';

class ListUserPolicyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                userpolicies: []
        }
        this.addUserPolicy = this.addUserPolicy.bind(this);
        this.editUserPolicy = this.editUserPolicy.bind(this);
    }

    viewUserPolicy(userpolicyid){
        this.props.history.push(`/view-userpolicy/${userpolicyid}`);
    }
    
    editUserPolicy(userpolicyid){
        this.props.history.push(`/update-userpolicy/${userpolicyid}`);
    }

    componentDidMount(){
        UserPolicyService.getUserPolicies().then((res) => {
            this.setState({ userpolicies: res.data});
        });
    }

    addUserPolicy(){
        this.props.history.push('/add-userpolicy');
    }
    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">UsersPolicy List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                          <thead class="thead-dark">
                                <tr>
                                
                                    <th>UserId</th>
                                    <th>PolicyId</th>
                                    <th>RegisteredDate</th>
                                    <th>Amount</th>
                                    <th>Totaltime</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.userpolicies.map(
                                        userpolicy => 
                                        <tr key = {userpolicy.userpolicyid}>
                                            <td>{userpolicy.userid}</td>
                                           <td> { userpolicy.policyid} </td>  
                                           <td> {userpolicy.registeredDate}</td> 
                                             <td> {userpolicy.amount} </td>   
                                             <td> {userpolicy.totalTime}</td>
                                             <td>
                                                 <button onClick={ () => this.editUserPolicy(userpolicy.userpolicyid)} className="btn btn-success">Update </button>
                                            
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUserPolicy(userpolicy.userpolicyid)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 <button className="btn btn-danger" onClick={this.cancel.bind(this)}>cancel</button>
            </div>
        )
    }
}

export default ListUserPolicyComponent



