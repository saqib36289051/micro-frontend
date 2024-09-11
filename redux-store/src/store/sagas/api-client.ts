import axios from "axios";
import { getAuthToken } from "../../utils/util"; 
import store from "../store";
const iToken = getAuthToken();
// axios.defaults.headers.common = { Authorization: `Bearer ${iToken}` };
axios.defaults.headers.common = { Authorization: `Bearer ${iToken}` };
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    const token = store.getState().setting.user.token;
    config.headers.Authorization =  `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
