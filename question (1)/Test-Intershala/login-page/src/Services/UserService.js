
import axios from "axios";

class UserService {

    baseUrl = 'http://localhost:9094/reqres.in/api'


    userLogin = (user) => {
        console.log(user);
        return axios.post(`${this.baseUrl}` + "/login", user);
    }
    
}

export default new UserService();