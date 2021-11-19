import axios from "axios";
const URL = '/api/listening';

const listeningApi = {
  getListening: (id, token) => {
    return axios.get(`${URL}/get-listening/${id}`, {
      headers: {Authorization: token}
    })
  },

  getListenByTopic: (topic, token) => {
    return axios.get(`${URL}/get-listen-by-topic/${topic}`, {
      headers: {Authorization: token}
    })
  },

  getListenById: (id, token) => {
    return axios.get(`${URL}/get-listen-by-id/${id}`, {
      headers: {Authorization: token}
    })
  },

  getListenTopics: (token) => {
    return axios.get(`${URL}/get-listen-topics`, {
      headers: {Authorization: token}
    })
  },

  getAllListen: (token) => {
    return axios.get(`${URL}/get-all-listen`, {
      headers: {Authorization: token}
    })
  },

  postListen: (formData, token) => {
    return axios.post(`${URL}/post-listen`, formData, {
      headers: {Authorization: token}
    })
  },

  putListen: (id, formData, token) => {
    return axios.put(`${URL}/put-listen/${id}`, formData, {
      headers: {Authorization: token}
    })
  },

  deleteListen: (id, token) => {
    return axios.delete(`${URL}/delete-listen/${id}`,{
      headers: {Authorization: token}
    })
  },
}

export default listeningApi;