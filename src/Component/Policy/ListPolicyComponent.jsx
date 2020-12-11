import React, { Component } from 'react'
import PolicyService from '../../Services/PolicyService';

class ListPolicyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                policys: []
        }
      
        this.addPolicy = this.addPolicy.bind(this);
        this.editPolicy = this.editPolicy.bind(this);
    }

    viewPolicy(id){
        this.props.history.push(`/view-policy/${id}`);
    }
   
    editPolicy(id){
        this.props.history.push(`/update-policy/${id}`);
    }
   
    componentDidMount(){
        PolicyService.getPolicy().then((res) => {
            this.setState({ policys: res.data});
        });
    }

    addPolicy(){
        this.props.history.push('/add-policy');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Policy List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPolicy}> Add Policy</button>
                    
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr> 
                                    <th> Id</th>
                                    <th> Description</th>
                                    <th> Years Of Payment</th>
                                    <th> Amount</th>
                                    <th> Maturity Period</th>
                                    <th> Maturity Amount</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.policys.map(
                                        policy => 
                                        <tr key = {policy.id}>
                                            <td>{policy.id}</td>
                                             <td> {policy.description} </td>   
                                             <td> {policy.yearsOfPayment}</td>
                                             <td> {policy.amount}</td>
                                             <td> {policy.maturityperiod}</td>
                                             <td> {policy.maturityamount}</td>
                                             <td>
                                            <button onClick={ () => this.editPolicy(policy.id)} className="btn btn-info">Update </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewPolicy(policy.id)} className="btn btn-info">View </button>
                                   
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>

            </div>
        )
    }
}

export default ListPolicyComponent
