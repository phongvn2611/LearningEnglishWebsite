import QUIZ_CONSTANT from "../constants/quizConstant";
import quizApi from "./../../apis/quizApi";

export const getQuizByListen = (id) => {
    return async (dispatch) => {
        try {          
          const response = await quizApi.getQuizByListen(id);
            dispatch({
              type: QUIZ_CONSTANT.GET_QUIZ_BY_LISTEN,
              payload: response.data.question,
            })
        } catch (error) {
          dispatch({ type: QUIZ_CONSTANT.SET_QUIZ_ERROR })
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        }
      }
}
