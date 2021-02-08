import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(function (req) {
  const token = localStorage.getItem("token");
  req.headers.Authorization = token ? `Bearer ${token}` : "";
  return req;
});

axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    console.log(error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    throw error;
  }
);

export default axiosClient;
