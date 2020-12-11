import React, { Component } from 'react'
import UserService from '../../Services/PolicyService';

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.userId,
            user: {}
        }
    }

    onsubmit(){
        UserService.getUserById(this.state.userId).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> User Id: </label>
                            <div> { this.state.user.userId }</div>
                        </div>
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.user.fname }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.user.lname }</div>
                        </div>
                        <div className = "row">
                            <label> Phone No: </label>
                            <div> { this.state.user.phoneno }</div>
                        </div>
                        <div className = "row">
                            <label>  Aadhar No: </label>
                            <div> { this.state.user.aadhar }</div>
                        </div>
                    </div>

                </div>
      
       

            </div>
        )
    }
}

export default ViewUserComponent
