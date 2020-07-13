import axios from "axios";

export default {
  
  getBreweries: function() {
    return axios.get(`/api/breweries`);
  }
};
