import axios from "axios";
const URL = `${process.env.REACT_APP_API_URL}/api/ipa`;

const ipaApi = {
  getIPA: (id) => {
    return axios.get(`${URL}/get-ipa-by-id/${id}`)
  },

  getIPARelative: (type, phonetic) => {
    return axios.get(`${URL}/get-ipa-relative`, { params: { type, phonetic } })
  },

  getIPAByType: (type) => {
    return axios.get(`${URL}/get-ipa-by-type/${type}`)
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

  deleteIPA: (id, token) => {
    return axios.delete(`${URL}/delete-ipa/${id}`,{
      headers: {Authorization: token}
    })
  },
}

export default ipaApi;
