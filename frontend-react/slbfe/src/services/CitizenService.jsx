import axios from "axios";

const SLBFE_API = "http://localhost:8080/citizens";

class CitizenService {
  getCitizens() {
    return axios.get(SLBFE_API);
  }

  createCitizen(citizen) {
    return axios.post(SLBFE_API, citizen);
  }

  getCitizenById(nid) {
    return axios.get(SLBFE_API + "/" + nid);
  }

  updateCitizen(citizen, nid) {
    return axios.put(SLBFE_API + "/" + nid, citizen);
  }

  deleteCitizen(nid) {
    return axios.delete(SLBFE_API + "/" + nid, nid);
  }

  validateCitizen(email, password){
    const obj = {
      "email": email,
      "password": password
    }
    return axios.post(SLBFE_API+"/validate", obj)
  }

  getContactInfo(nid){
    return axios.get(SLBFE_API+"/"+nid+"/contacts");
  }
}

export default new CitizenService();
