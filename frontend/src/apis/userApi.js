import axios from "axios";
const URL = '/user';
const userApi = {
  loginApi: (email, password) => {
    return axios.post(`${URL}/login`, { email, password });
  },
  registerApi: (name, email, password) => {
    return axios.post(`${URL}/register`, { name, email, password });
  },
  getTokenApi: () => {
    return axios.get(`${URL}/get-token`);
  }
}

export default userApi;
