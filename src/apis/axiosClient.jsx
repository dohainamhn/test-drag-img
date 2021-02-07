import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://teender-heroku-dev.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    throw error;
  }
);

export default axiosClient;
