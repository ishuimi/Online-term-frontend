import React, { Component } from 'react'
import UserService from '../../Services/UserService';


class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                user: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        
    }

    viewUser(userId){
        this.props.history.push(`/view-user/${userId}`);
    }
    editUser(userId){
        this.props.history.push(`/update-user/${userId}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ user: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">User List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User First Name</th>
                                    <th> User Last Name</th>
                                     <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map(
                                        user => 
                                        <tr key = {user.userId}>
                                             <td> {user.fname} </td>   
                                             <td> {user.lname}</td>
                                             <td>
                                                 <button onClick={ () => this.editUser(user.userId)} className="btn btn-info">Update </button>
                                                 <button className="btn btn-success" onClick={()=>this.viewUser(user.userId)} style={{marginLeft:"10px"}}>View</button>   
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

export default ListUserComponent
