import axios from 'axios';
const URL = `/api/fileTest`;

const fileTestApi = {
  getAllQuestionsOfPart: (testId = '', part = '') => {
    return axios.get(`${URL}/get-questions-of-part`, { params: { testId, part }})
  }
}
export default fileTestApi;
