
import MESSAGE_CONSTANT from './../constants/messageConstant';
const messageAction = {
  setMessage: (message, type) => (dispatch) => {
    dispatch({
      type: MESSAGE_CONSTANT.SET_MESSAGE,
      payload: {
        message,
        type
      }
    })
  },
  closeMessage: () => (dispatch) => {
    dispatch({
      type: MESSAGE_CONSTANT.CLOSE_MESSAGE
    })
  },
}

export default messageAction;
