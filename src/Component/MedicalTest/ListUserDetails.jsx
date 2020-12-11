import React, { Component } from 'react'
import UserDetailsService from '../../Services/UserDetailsService';
class ListUserDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
                healthmodules: []
        }
        this.addUserDetails = this.addUserDetails.bind(this);
        this.reloadUserDetailsList=this.reloadUserDetailsList.bind(this);
    }
    viewUserDetails(medicalId){
        this.props.history.push(`/view-userdetails/${medicalId}`);
    }
    addUserDetails(){
        this.props.history.push('/add-userdetails/_add');
    }
    componentDidMount(){
        this.reloadUserDetailsList();
    }
    reloadUserDetailsList(){
        UserDetailsService.ListUserDetails().then((res) => {
            this.setState({ healthmodules: res.data})
        });
    }
    cancel(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Eligible List</h2>
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> Name</th>
                                    <th> Aadhar No</th>
                                    <th> Address</th>
                                    <th> Age</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.healthmodules.map(
                                        healthmodule => 
                                        <tr key = {healthmodule.medicalId}>
                                             <td> {healthmodule.name} </td>   
                                             <td> {healthmodule.aadharNo}</td>
                                             <td> {healthmodule.address}</td>
                                             <td> {healthmodule.age}</td>
                                            
                                            
                                    
                                                     
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

export default ListUserDetails

