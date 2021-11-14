import axios from "axios";
const URL = '/api/listening';

const listeningApi = {
  getListening: (id) => {
    return axios.get(`${URL}/get-listening/${id}`)
    },
  }
  

export default listeningApi;