const axios = require("axios");
const API_BASE_URL = "http://127.0.0.1:8000/";
const HTTP = axios.create({
  baseURL: API_BASE_URL,
});

export default {
  getClient() {
    return HTTP.get("/clients/");
  },
  getDepartment() {
    return HTTP.get("/departments/");
  },
};
