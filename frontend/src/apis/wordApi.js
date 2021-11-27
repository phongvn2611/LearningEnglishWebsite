import axios from "axios";
const URL = '/api/word';

const wordApi = {
  getWord: (word = '') => {
    return axios.get(`${URL}/get-word-details`, { params: { word } });
  },

  getWordByTopic: (topic) => {
    return axios.get(`${URL}/get-word-by-topic/${topic}`);
  },

  searchWord: (word = '', isCompact = false) => {
    return axios.get(`${URL}/search-word`, {
      params: { word, isCompact },
    });
  },

  getWordTopics: () => {
    return axios.get(`${URL}/get-word-topics`);
  },

  getAllWord: () => {
    return axios.get(`${URL}/get-all-word`);
  },

  postWord: (formData) => {
    return axios.post(`${URL}/post-word`, formData);
  },

  putWord: (id, formData) => {
    return axios.put(`${URL}/put-word/${id}`, formData);
  },

  deleteWord: (word='', type='') => {
    return axios.delete(`${URL}/delete-word`, {params: { word, type}});
  },

  checkWordExist: ( word='', type='') => {
    return axios.get(`${URL}/exist-word`, {params: { word, type}});
  },

  getWordList: (page = 1, perPage = 8, packInfo, sortType = 'rand') => {
    return axios.get(`${URL}/get-word-pack`, {
      params: { page, perPage, packInfo: JSON.stringify(packInfo), sortType },
    });
  },
}

export default wordApi;
