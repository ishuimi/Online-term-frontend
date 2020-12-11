import axios from 'axios';

const HealthModule_API_BASE_URL = "http://localhost:8083/api/v2/userdetails";

class UserDetailsService {

    ListUserDetails(){
        return axios.get(HealthModule_API_BASE_URL);
    }

    createUserDetails(healthmodule){
        return axios.post(HealthModule_API_BASE_URL, healthmodule);
    }

    getUserDetailsById(medicalId){
        return axios.get(HealthModule_API_BASE_URL + '/' + medicalId);
    }

    
}

export default new UserDetailsService()