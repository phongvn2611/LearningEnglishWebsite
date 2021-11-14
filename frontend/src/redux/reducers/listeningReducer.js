import LISTEN_CONSTANT from "../constants/listeningConstant";

const initialState = {
  questions: [],
  listen: [],
  isListenLoading: false,
}
const listeningReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LISTEN_CONSTANT.SET_LISTEN_LOADING:
      return {
        ...state,
        isListenLoading: payload,
      }
    case LISTEN_CONSTANT.SET_LISTEN_ERROR:
      return {
        ...state,
        isListenLoading: true,
      }

    case LISTEN_CONSTANT.GET_LISTEN:
      return {
        ...state,
        listen: payload.listen,
        questions: payload.questions,
      }
    default:
      return state
  }
}

export default listeningReducer
