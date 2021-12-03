import axios from "axios";
const URL = '/api/word';

const wordApi = {
  getWord: (id = '') => {
    return axios.get(`${URL}/get-word-details`, { params: { id } });
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

  postWord: (wordData) => {
    return axios.post(`${URL}/post-word`, {...wordData}, {
      header: { "content-type": "multipart/form-data" },
    });
  },

  putWord: (id, wordData) => {
    return axios.put(`${URL}/put-word/${id}`, {...wordData}, {
      header: { "content-type": "multipart/form-data" },
    });
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
