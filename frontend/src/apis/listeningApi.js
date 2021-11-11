import axios from "axios";
const URL = '/api/listening';

const listeningApi = {
  getListenById: (id, token) => {
    return axios.get(`${URL}/get-listen-by-id/${id}`, {
        headers: {Authorization: token}
      })
    },
  }
  

export default listeningApi;