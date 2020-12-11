import React, { Component } from 'react'
import UserDetailsService from '../../Services/UserDetailsService';

class ViewUserDetails extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            medicalId: this.props.match.params.medicalId,
            healthmodule: {}
        }
    }
    componentDidMount(){
        UserDetailsService.getUserDetailsById(this.state.medicalId).then( res => {
            this.setState({healthmodule: res.data});
        })
    }
render(){
 return (
        <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View User Details</h3>
                <div className = "card-body">
                <div className = "row">
                        <label>Medical Id: { this.state.healthmodule.medicalId } </label>
                      
                    </div>
                    <div className = "row">
                        <label>Name: { this.state.healthmodule.name } </label>
                        
                    </div>
                    <div className = "row">
                        <label>Aadhar No: { this.state.healthmodule.aadharNo} </label>
                        
                    </div>
                    <div className = "row">
                        <label>Phone No: { this.state.healthmodule.phoneNo }</label>
                       
                    </div>
                    <div className = "row">
                        <label>Address: { this.state.healthmodule.address }</label>
                        
                    </div>
                    <div className = "row">
                        <label>Age: { this.state.healthmodule.age}</label>
                        
                    </div>
                    <div className = "row">
                            <label> Accident: { this.state.healthmodule.accident } </label>
                           
                        </div>
                        <div className = "row">
                            <label> Alcohol:{ this.state.healthmodule.alcohol} </label>
                            
                        </div>

                </div>

            </div>
        </div>
    )
}

}
export default ViewUserDetails