import axios from "axios";
const URL = `${process.env.REACT_APP_API_URL}/api/common`;

const commonApi = {
  getWordPackTotal: (packInfo) => {
    return axios.get(`${URL}/word-pack/total`, {
      params: { packInfo: JSON.stringify(packInfo) },
    });
  },

  getWordTopicTotal: (packInfo) => {
    return axios.get(`${URL}/word-topic/total`, {
      params: { packInfo: JSON.stringify(packInfo) },
    });
  },
};

export default commonApi;
