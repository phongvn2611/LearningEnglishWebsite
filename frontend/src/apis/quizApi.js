import axios from "axios";
const URL = '/api/question';

const quizApi = {
  getQuizByListen: (listenId) => {
    return axios.get(`${URL}/get-by-listenId/${listenId}`)
    },
}



export default quizApi;