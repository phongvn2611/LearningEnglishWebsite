import axios from "axios";
const URL = `${process.env.REACT_APP_API_URL}/api/question`;

const questionApi = {
  getQuestion: (id, token) => {
    return axios.get(`${URL}/get-question-by-id/${id}`, {
      headers: {Authorization: token}
    })
  },

  getQuestionByQuiz: (id, token) => {
    return axios.get(`${URL}/get-question-by-quiz/${id}`)
  },

  postQuestion: (id, question) => {
    return axios.post(`${URL}/post-question-by-quiz/${id}`, {...question})
  },

  putQuestion: (id, formData, token) => {
    return axios.put(`${URL}/put-question/${id}`, formData, {
      headers: {Authorization: token}
    })
  },

  deleteQuestionByQuiz: (id, token) => {
    return axios.delete(`${URL}/delete-question-by-quiz/${id}`,{
      headers: {Authorization: token}
    })
  },

  deleteQuestion: (id, token) => {
    return axios.delete(`${URL}/delete-question-by-id/${id}`,{
      headers: {Authorization: token}
    })
  },
}

export default questionApi;
