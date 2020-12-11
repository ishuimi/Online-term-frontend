import axios from 'axios';

const UserPolicy_API_BASE_URL = "http://localhost:8083/api/v1/userpolicy";

class UserPolicyService {

    getUserPolicies(){
        return axios.get(UserPolicy_API_BASE_URL);
    }

    createUserPolicy(userpolicy){
        return axios.post(UserPolicy_API_BASE_URL, userpolicy);
    }
    
    getUserPolicyById(userId){
        return axios.get(UserPolicy_API_BASE_URL + '/' + userId );
    }
    
    updateUserPolicy(userpolicy, userpolicyid){
        return axios.put(UserPolicy_API_BASE_URL + '/' + userpolicyid,userpolicy);
    }

    deleteUserPolicy(userpolicyid){
        return axios.delete(UserPolicy_API_BASE_URL + '/' + userpolicyid);
    }
}

export default new UserPolicyService()