import axios from "axios";
const URL = `${process.env.REACT_APP_API_URL}/api/quiz`;

const quizApi = {
  getQuiz: (id, token) => {
    return axios.get(`${URL}/get-quiz-by-id/${id}`, {
      headers: { Authorization: token },
    });
  },

  getQuizByListen: (id) => {
    return axios.get(`${URL}/get-quiz-by-listen/${id}`);
  },
  getAllQuiz: (token) => {
    return axios.get(`${URL}/get-all-quiz`, {
      headers: { Authorization: token },
    });
  },

  postQuizByListen: (id) => {
    return axios.post(`${URL}/post-quiz-by-listen/${id}`);
  },

  deleteQuizByListen: (id, token) => {
    return axios.delete(`${URL}/delete-quiz-by-listen/${id}`, {
      headers: { Authorization: token },
    });
  },

  deleteQuiz: (id, token) => {
    return axios.delete(`${URL}/delete-quiz-by-id/${id}`, {
      headers: { Authorization: token },
    });
  },
};

export default quizApi;
