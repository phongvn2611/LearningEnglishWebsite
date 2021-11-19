import axios from "axios";
const URL = '/api/word';

const wordApi = {
  getWord: (id, token) => {
    return axios.get(`${URL}/get-word-by-id/${id}`, {
      headers: {Authorization: token}
    })
  },

  getWordByTopic: (topic, token) => {
    return axios.get(`${URL}/get-word-by-topic/${topic}`, {
      headers: {Authorization: token}
    })
  },

  searchWord: (word, token) => {
    return axios.get(`${URL}/get-listen-by-id`, word, {
      headers: {Authorization: token}
    })
  },

  getWordTopics: (token) => {
    return axios.get(`${URL}/get-word-topics`, {
      headers: {Authorization: token}
    })
  },

  getAllWord: (token) => {
    return axios.get(`${URL}/get-all-word`, {
      headers: {Authorization: token}
    })
  },

  postWord: (formData, token) => {
    return axios.post(`${URL}/post-word`, formData, {
      headers: {Authorization: token}
    })
  },

  putWord: (id, formData, token) => {
    return axios.put(`${URL}/put-word/${id}`, formData, {
      headers: {Authorization: token}
    })
  },

  deleteWord: (id, token) => {
    return axios.delete(`${URL}/delete-word/${id}`,{
      headers: {Authorization: token}
    })
  },

  checkWordExist: (id, formData, token) => {
    return axios.put(`${URL}/exist-word`, formData, {
      headers: {Authorization: token}
    })
  },

  getWordPack: (formData, token) => {
    return axios.delete(`${URL}/get-wordpack`,formData, {
      headers: {Authorization: token}
    })
  },
}

export default wordApi;