import axios from "axios";
const URL = '/api/word';

const wordApi = {
  getWord: (word = '') => {
    return axios.get(`${URL}/get-word-details`, { params: { word } });
  },

  getWordByTopic: (topic, token) => {
    return axios.get(`${URL}/get-word-by-topic/${topic}`, {
      headers: {Authorization: token}
    })
  },

  searchWord: (word = '', isCompact = false) => {
    return axios.get(`${URL}/search-word`, {
      params: { word, isCompact },
    });
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

  getWordList: (page = 1, perPage = 8, packInfo, sortType = 'rand') => {
    return axios.get(`${URL}/get-word-pack`, {
      params: { page, perPage, packInfo: JSON.stringify(packInfo), sortType },
    });
  },
}

export default wordApi;
