
import './App.css';
import GetpaymentDetails from './Component/Payment/GetpaymentDetails';
import DeletePayment from './Component/Payment/DeletePayament';
import NavigationBar from './Component/NavigationBar'
import { Container,Row ,Jumbotron,Col} from 'react-bootstrap';
import Footer from './Component/Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Welcome from './Component/Welcome';
import MakePayment from'./Component/Payment/MakePayment';
import GetAllPayment from './Component/Payment/GetAllPayment';
import GetPaymentDetailsForUserIdAndPolicyNo from './Component/Payment/GetPaymentDetailsForUserIdAndPolicyNo';
import CreatePolicyComponent from './Component/Policy/CreatePolicyComponent';
import ListPolicyComponent from './Component/Policy/ListPolicyComponent';
import UpdatePolicyComponent from './Component/Policy/UpdatePolicyComponent';
import ViewPolicyComponent from './Component/Policy/ViewPolicyComponent';
import CreateUserComponent from './Component/User/CreateUserComponent';
import ListUserComponent from './Component/User/ListUserComponent';
import UpdateUserComponent from './Component/User/UpdateUserComponent';
import ViewUserComponent from './Component/User/ViewUserComponent';
import BuyPolicyComponent from './Component/UserPolicy/BuyPolicyComponent';
import ListUserPolicyComponent from './Component/UserPolicy/ListUserPolicyComponent';
import UpdateUserPolicyComponent from './Component/UserPolicy/UpdateUserPolicyComponent';
import ViewUserPolicyComponent from './Component/UserPolicy/ViewUserPolicyComponent';
import CreateUserDetails from './Component/MedicalTest/CreateUserDetails';
import ListUserDetails from './Component/MedicalTest/ListUserDetails';
import ViewUserDetails from './Component/MedicalTest/ViewUserDetails';
import Auth from './Component/Auth';
import Protected from './Component/Protected';


function App() {
  const marginTop={
    marginTop:"20px"
  };

  return (
    
    <Router>

      
    <NavigationBar/>
    
    <Container>
      <Row>
        <Col lg={12} style={marginTop}>

         
          <Switch>
            <Route path="/home"><Protected cmp={Welcome}/></Route> 
            <Route path="/paymentbyreciept" ><Protected cmp={GetpaymentDetails}/></Route>
            <Route path="/makepayment"><Protected cmp={MakePayment}/></Route>
            <Route path="/allpayment"><Protected cmp= {GetAllPayment}/></Route>.
            <Route path="/paymentbyuserId" ><Protected cmp= {GetPaymentDetailsForUserIdAndPolicyNo}/></Route>
            <Route path = "/policy"><Protected cmp= {ListPolicyComponent}/></Route>  
            <Route path = "/add-policy" ><Protected cmp={CreatePolicyComponent}/></Route>
            <Route path ="/view-policy/:id"> <Protected cmp={ViewPolicyComponent}/></Route>  
            <Route path ="/update-policy/:id" ><Protected cmp={UpdatePolicyComponent}/></Route>
            <Route path = "/user" ><Protected cmp={ListUserComponent}/></Route>
            <Route path = "/add-user"><Protected cmp={CreateUserComponent}/></Route>
            <Route path ="/view-user/:userId" ><Protected cmp={ViewUserComponent}/></Route>
            <Route path ="/update-user/:userId" ><Protected cmp={UpdateUserComponent}/></Route>
            <Route path = "/userpolicy"><Protected cmp={ListUserPolicyComponent}/></Route>
            <Route path = "/view-userpolicy"> <Protected cmp={ViewUserPolicyComponent}/></Route>
            <Route path = "/add-userpolicy"> <Protected cmp={BuyPolicyComponent}/></Route>
            <Route path = "/update-userpolicy/:userpolicyid"><Protected cmp={UpdateUserPolicyComponent}/></Route>
            <Route path = "/add-userdetails"> <Protected cmp= {CreateUserDetails}/></Route>
            <Route path = "/userdetails" ><Protected cmp={ListUserDetails}/></Route>
            <Route path = "/view-userdetails/:medicalId" ><Protected cmp={ViewUserDetails}/></Route>
            <Route path = "/" exact component = {Auth}></Route>



          </Switch>

      </Col>

      </Row>
    </Container>

    <Footer/>


    </Router>

     
     
    
  );
}

export default App;
