
import React, { Component } from 'react'
import PolicyService from '../../Services/PolicyService';

class ViewPolicyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            policy: {}
        }
    }

    componentDidMount(){
        PolicyService.getPolicyById(this.state.id).then( res => {
            this.setState({policy: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Policy Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Policy Id: </label>
                            <div> { this.state.policy.id }</div>
                        </div>
                        <div className = "row">
                            <label> Policy description: </label>
                            <div> { this.state.policy.description }</div>
                        </div>
                        <div className = "row">
                            <label> Policy yearsOfPayment: </label>
                            <div> { this.state.policy.yearsOfPayment }</div>
                        </div>
                        <div className = "row">
                            <label> Policy Amount: </label>
                            <div> { this.state.policy.amount }</div>
                        </div>
                        <div className = "row">
                            <label> Policy maturityperiod: </label>
                            <div> { this.state.policy.maturityperiod }</div>
                        </div>
                        <div className = "row">
                            <label> Policy maturityamount: </label>
                            <div> { this.state.policy.maturityamount }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPolicyComponent
