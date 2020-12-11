import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import UserDetailsService from '../../Services/UserDetailsService';

class CreateUserDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            medicalId: '',
            name: '',
            aadharNo: '',
            phoneNo:'',
            address: '',
            age:0,
            accident:'',
            alcohol:'',
            message:null
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAadharNoHandler = this.changeAadharNoHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeAccidentHandler = this.changeAccidentHandler.bind(this);
        this.changeAlcoholHandler = this.changeAlcoholHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    componentDidMount(){

        // step 4
        if(this.state.medicalId === '_add'){
            return
        }else{
            UserDetailsService.getUserDetailsById(this.state.medicalId).then( (res) =>{
                let healthmodule = res.data;
                this.setState({name: healthmodule.name,
                    aadharNo: healthmodule.aadharNo,phoneNo:healthmodule.phoneNo,address:healthmodule.address,
                    age : healthmodule.age,accident:healthmodule.accident,alcohol:healthmodule.alcohol
                });
            });
        }        
    }
    saveUser =(e)=>{
        e.preventDefault();
       
      let Ac=this.state.alocohol;
       let Acc=this.state.accident;
       
        if(Ac==='Y'||Acc==='Y'|| Ac==='y'||Acc==='y')
        {
            alert("You are not Eligible");
            this.props.history.push('/');

        }
        else{
            alert("Congratulations,You are Eligible");
            
        
    
            
              let healthmodule = {name: this.state.name, aadharNo: this.state.aadharNo, phoneNo: this.state.phoneNo,address: this.state.address,age: this.state.age,accident: this.state.accident,alcohol: this.state.alcohol};
             console.log('userdetails=> ' + JSON.stringify(healthmodule));
             UserDetailsService.createUserDetails(healthmodule).then(res=>{this.setState({message:'User details added successfully.'});
          
             <Redirect to="/home"></Redirect>
          });
        }
        
    }

    cancel(){
        this.props.history.push('/userdetails');
    }
   
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeAadharNoHandler= (event) => {
        this.setState({aadharNo: event.target.value});
    }

    changePhoneNoHandler= (event) => {
        this.setState({phoneNo: event.target.value});
    }
    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }
    changeAccidentHandler= (event) => {
        this.setState({accident: event.target.value});
    }
    changeAlcoholHandler= (event) => {
        this.setState({alcohol: event.target.value});
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add UserDetails</h3>
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
                                            <label>Name: </label>
                                            <input type="text" placeholder=" Enter Your Name" name="name" className="form-control" 
                                                value={this.state.name} required="Required"onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Enter Your AadharNumber: </label>
                                            <input type="number" placeholder="AadharNo" name="aadharNo" className="form-control" 
                                                value={this.state.aadharNo} required="Required" onChange={this.changeAadharNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Enter Your PhoneNumber: </label>
                                            <input type="number" placeholder="PhoneNo" name="phoneNo" className="form-control" 
                                                value={this.state.phoneNo} required="Required" onChange={this.changePhoneNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Enter Your Address: </label>
                                            <input type="text" placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} required="Required" onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Enter Your Age: </label>
                                            <input type="number" placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age} required="Required" onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Do You have any major Accident: </label>
                                            <input placeholder="Y/N" name="accident" className="form-control" 
                                                value={this.state.accident} required="Required" onChange={this.changeAccidentHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Do You Use Tobacco or Alcohol: </label>
                                            <input placeholder="Y/N" name="alcohol" className="form-control" 
                                                value={this.state.alcohol} required="Required" onChange={this.changeAlcoholHandler}/>
                                        </div>

                                        <button className="btn btn-success"onClick={this.saveUser}>Submit</button>
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

export default CreateUserDetails
