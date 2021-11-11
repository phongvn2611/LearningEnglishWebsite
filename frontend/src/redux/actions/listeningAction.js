import LISTEN_CONSTANT from "../constants/listeningConstant";
import listeningApi from "./../../apis/listeningApi";
import messageAction from './messageAction';
import loginReducer from '../reducers/authReducer';

const listeningAction = {
  getListenById: (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: LISTEN_CONSTANT.GET_LISTEN_BY_ID_REQUEST });
      const {
        loginReducer: { data }
      } = getState();
      const res = await listeningApi.getListenById(id, data.access_token);
      dispatch({ type: LISTEN_CONSTANT.GET_LISTEN_BY_ID_SUCCESS, payload: res.data });
    }
    catch (error) {
      dispatch({
        type: LISTEN_CONSTANT.GET_LISTEN_BY_ID_FAILURE,
        payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      })
    }
  }
  
};
export default listeningAction;
