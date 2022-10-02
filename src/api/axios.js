import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.staging.batchlearn.com/api/v1/",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer  ",
  },
});

export default instance;
