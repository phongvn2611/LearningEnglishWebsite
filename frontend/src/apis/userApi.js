import axios from "axios";
const URL = "/api/user";
const userApi = {
  login: (email, password) => {
    return axios.post(`${URL}/login`, { email, password });
  },
  register: (name, email, password) => {
    return axios.post(`${URL}/register`, { name, email, password });
  },
  activationEmail: (activation_token) => {
    return axios.post(`${URL}/activation`, { activation_token });
  },
  forgotPassword: (email) => {
    return axios.post(`${URL}/forgot-password`, { email });
  },
  resetPassword: (password, access_token) => {
    return axios.post(`${URL}/reset-password`, { password, access_token });
  },
  getToken: () => {
    return axios.get(`${URL}/refresh-token`);
  },
  getUserInfo: () => {
    return axios.get(`${URL}/get-user-info`);
  },
  updateAvatar: (avatar) => {
    return axios.post(`${URL}/update-avatar`, avatar, {
      header: { "content-type": "multipart/form-data" },
    });
  },
  updateProfile: (name, avatar) => {
    return axios.post(`${URL}/update-profile`, { name, avatar });
  },
  updatePassword: (password) => {
    return axios.post(`${URL}/update-password`, { password });
  },
  logout: () => {
    return axios.post(`${URL}/logout`);
  },
};

export default userApi;
