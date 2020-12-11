import React, { Component } from 'react'
import UserService from '../../Services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            fname: '',
            lname: '',
            phoneno: '',
            aadhar: '' ,
            ad:{
            houseno:'', 
            city:'',
            street:'',
            state:'', 
            pin:'',
            },
            dob:'',
            message:'none'
        }
      
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser(e){
      e.preventDefault();
        var user = {fname: this.state.fname,
            lname:this.state.lname,phoneno:this.state.phoneno,aadhar:this.state.aadhar,ad:{ houseno:this.state.houseno, 
            city:this.state.city,
            street:this.state.street,
            state:this.state.state, 
            pin:this.state.pin},dob:this.state.dob
                
            }
       console.log(
           user
       );
     
       
      
}

    cancel(){
        this.props.history.push('/user');
    }
   
    onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    }
    

    getTitle(){
        if(this.state.userId === '_add'){
            return <h3 className="text-center">Add User</h3>
        }
    }
    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form onSubmit={this.saveUser}>
                                        <div className = "form-group">
                                            <label>First Name: </label>
                                            <input placeholder=" Enter Your First Name " name="fname" className="form-control" 
                                                value={this.state.fname} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Enter your Last Name" name="lname" className="form-control" 
                                                value={this.state.lname}onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone No: </label>
                                            <input placeholder="PhoneNo" name="phoneNo" className="form-control" 
                                                value={this.state.phoneNo}onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Aadhar No: </label>
                                            <input placeholder="Aaadhar No" name="aadhar" className="form-control" 
                                                value={this.state.aadhar}onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>House No: </label>
                                            <input placeholder=" House Number" name="houseno" className="form-control" 
                                                value={this.state.houseno} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>City: </label>
                                            <input placeholder=" City " name="city" className="form-control" 
                                                value={this.state.city} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Street: </label>
                                            <input placeholder=" Street " name="street" className="form-control" 
                                                value={this.state.street} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>State : </label>
                                            <input placeholder=" State " name="state" className="form-control" 
                                                value={this.state.state} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Pin: </label>
                                            <input placeholder="Pin " name="pin" className="form-control" 
                                                value={this.state.pin} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Date of birth: </label>
                                            <input placeholder=" DOB " name="dob" className="form-control" 
                                                value={this.state.dob} onChange={this.onChange}/>
                                        </div>
                    

                                        <button className="btn btn-success">Save</button>
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

export default CreateUserComponent
