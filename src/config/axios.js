import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// AUTH_TOKEN;
axiosClient.defaults.headers.post["Content-Type"] = "application/json";

axiosClient.setAuth = (token) => {
  axiosClient.defaults.headers.common["Authorization"] = token;
};

export default axiosClient;
