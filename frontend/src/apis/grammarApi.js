import axios from "axios";
const URL = '/api/grammar';

const grammarApi = {
  getGrammarByID: (id, token) => {
    return axios.get(`${URL}/get-grammar-by-id/${id}`, {
      headers: {Authorization: token}
    })
  },
}
