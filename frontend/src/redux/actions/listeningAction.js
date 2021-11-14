import LISTEN_CONSTANT from "../constants/listeningConstant";
import listeningApi from "./../../apis/listeningApi";

export const getListening = (id) => {
    return async (dispatch) => {
        try {          
          const response = await listeningApi.getListening(id);
            dispatch({
              type: LISTEN_CONSTANT.GET_LISTEN,
              payload: response.data,
            })
        } catch (error) {
          dispatch({ type: LISTEN_CONSTANT.SET_LISTEN_ERROR })
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        }
      }
}
