import QUIZ_CONSTANT from "../constants/quizConstant";

const initialState = {
  quizs: [],
  quiz: [],
  isQuizLoading: false,
}
const quizReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case QUIZ_CONSTANT.SET_QUIZ_LOADING:
      return {
        ...state,
        isQuizLoading: payload,
      }
    case QUIZ_CONSTANT.SET_QUIZ_ERROR:
      return {
        ...state,
        isQuizLoading: true,
      }

    case QUIZ_CONSTANT.GET_QUIZ_BY_LISTEN:
      return {
        ...state,
        quiz: payload,
      }
    default:
      return state
  }
}

export default quizReducer
