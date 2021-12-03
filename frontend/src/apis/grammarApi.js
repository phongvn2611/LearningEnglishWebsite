import axios from "axios";
const URL = '/api/grammar';

const grammarApi = {
  getGrammar: (id) => {
    return axios.get(`${URL}/get-grammar/${id}`)
  },

  getGrammarByLevel: (level, token) => {
    return axios.get(`${URL}/get-grammar-by-level/${level}`, {
      headers: {Authorization: token}
    })
  },

  getGrammarLevels: (token) => {
    return axios.get(`${URL}/get-grammar-levels`, {
      headers: {Authorization: token}
    })
  },

  getAllGrammar: (token) => {
    return axios.get(`${URL}/get-all-grammar`, {
      headers: {Authorization: token}
    })
  },

  postGrammar: (formData, token) => {
    return axios.post(`${URL}/post-grammar`, formData, {
      headers: {Authorization: token}
    })
  },

  putGrammar: (id, formData, token) => {
    return axios.put(`${URL}/put-grammar/${id}`, formData, {
      headers: {Authorization: token}
    })
  },

  deleteGrammar: (id, token) => {
    return axios.delete(`${URL}/delete-grammar/${id}`,{
      headers: {Authorization: token}
    })
  },
}

export default grammarApi;