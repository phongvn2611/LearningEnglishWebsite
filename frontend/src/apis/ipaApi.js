import axios from "axios";
const URL = '/api/ipa';

const ipaApi = {
  getIPA: (id, token) => {
    return axios.get(`${URL}/get-ipa-by-id/${id}`, {
      headers: {Authorization: token}
    })
  },

  getAllIPA: (token) => {
    return axios.get(`${URL}/get-all-ipa`, {
      headers: {Authorization: token}
    })
  },

  postIPA: (formData, token) => {
    return axios.post(`${URL}/post-ipa`, formData, {
      headers: {Authorization: token}
    })
  },

  putIPA: (id, formData, token) => {
    return axios.put(`${URL}/put-ipa/${id}`, formData, {
      headers: {Authorization: token}
    })
  },

  deleteIPA: (id, token) => {
    return axios.delete(`${URL}/delete-ipa/${id}`,{
      headers: {Authorization: token}
    })
  },
}

export default ipaApi;