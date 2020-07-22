import axios from "axios";

export default {
  
  getBreweries: function() {
    return axios.get(`/api/breweries`);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
