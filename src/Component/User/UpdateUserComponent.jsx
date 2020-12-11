import React, { Component } from 'react'
import UserService from '../../Services/PolicyService';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.userId,
            fname: '',
            lname: '',
            phoneno: '',
            aadhar: '' ,
            message:null
        }
        //this.changefnameHandler = this.changefnameHandler.bind(this);
        //this.changelnameHandler = this.changelnameHandler.bind(this);
        this.changephonenoHandler = this.changephonenoHandler.bind(this);
        //this.changeaadharHandler = this.changeaadharHandler.bind(this);
        
    }

    componentDidMount(){
        UserService.getUserById(this.state.userId).then( (res) =>{
            let user = res.data;
            this.setState({fname: user.fname,
                lname:user.lname,
                phoneno:user.phoneno,
                aadhar:user.aadhar
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {fname: this.state.fname,
            lname:this.state.lname,
            phoneno:this.state.phoneno,
            aadhar:this.state.aadhar
        }

        console.log('user => ' + JSON.stringify(user));
        console.log('userId => ' + JSON.stringify(this.state.userId));
        UserService.updateUser(user, this.state.userId).then( res => {
            this.props.history.push('/user');
        });
    }

    /*changefnameHandler= (event) => {
        this.setState({fname: event.target.value});
    }

    changelnameHandler= (event) => {
        this.setState({lname: event.target.value});
    }*/

    changephonenoHandler= (event) => {
        this.setState({phoneno: event.target.value});
    }
    /*changeaadharHandler= (event) => {
        this.setState({aadhar: event.target.value});
    }*/
    
    cancel(){
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                      
                                        <div className = "form-group">
                                            <label> Phone No: </label>
                                            <input placeholder="PhoneNo" name="phoneno" className="form-control" 
                                                value={this.state.phoneno} onChange={this.changephonenoHandler}/>
                                        </div>
                                      

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
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

export default UpdateUserComponent
