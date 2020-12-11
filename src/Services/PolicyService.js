import axios from 'axios';

const POLICY_API_BASE_URL = "http://localhost:8083/api/v1/policy";

class PolicyService {

    getPolicy(){
        return axios.get(POLICY_API_BASE_URL);
    }

    getPolicyById(id){
        return axios.get(POLICY_API_BASE_URL + '/' + id);
    }

    createPolicy(policy){
        return axios.post(POLICY_API_BASE_URL, policy);
    }

    updatePolicy(policy, id){
        return axios.put(POLICY_API_BASE_URL + '/' + id, policy);
    }


}
export default new PolicyService()