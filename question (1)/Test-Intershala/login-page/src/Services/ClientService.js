import axios from "axios";
let userId = localStorage.getItem('userId');


class ClientService {

  baseUrl = 'http://localhost:9094/company'


  addClient= (user) => {
    return axios.post(`${this.baseUrl}`+ "/add", user);
}

  getAllClients () {
    return axios.get(`${this.baseUrl}` + "/getAll");
  }
  getClientById (id) {
    return axios.get(`${this.baseUrl}` + "/get/"+`${id}`);
  }
  deleteDataById (id) {
    console.log(`${this.baseUrl}` + "/delete/"+`${id}`)
    return axios.delete(`${this.baseUrl}` + "/delete/"+`${id}`);
  }

  searchByCompanyName (search) {
    console.log(search);
    return axios.get(`${this.baseUrl}` + "/searchByName"+"/"+search)
  }

    updateClient(id, user) {
      return axios.put(`${this.baseUrl}/update/${id}`, user);
    }
  }


export default new ClientService();
