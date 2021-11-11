import USER_CONSTANT from "../constants/userConstant";
import userApi from "./../../apis/userApi";
import messageAction from './messageAction';
import { loginReducer } from '../reducers/authReducer';

const authAction = {
  login: (email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_CONSTANT.LOGIN_REQUEST });
      const res = await userApi.loginApi(email, password);
      dispatch({
        type: USER_CONSTANT.LOGIN_SUCCESS,
        payload: {
          token: res.data.access_token,
          user: res.data.user,
        },
      });
      sessionStorage.setItem('firstLogin', true);
      dispatch(messageAction.setMessage(res.data.message, 'success'));
      if (res.data.user.roleType === 'user') {
        window.location.href= '/home'
      }
      else {
        window.location.href = '/admin'
      }
    } catch (err) {
      dispatch({
        type: USER_CONSTANT.LOGIN_FAILURE,
        payload: err.response.data.message
      });
      dispatch(messageAction.setMessage(err.response.data.message, 'error'));
    }
  },
  register: (name, email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_CONSTANT.REGISTER_REQUEST });
      const res = await userApi.registerApi(name, email, password);
      dispatch({
        type: USER_CONSTANT.REGISTER_SUCCESS,
        payload: res.data.message
      })
    }
    catch (err) {
      dispatch({
        type: USER_CONSTANT.REGISTER_FAILURE,
        payload: err.response.data.message
      })
    }
  },
  getProfile: () => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_CONSTANT.GET_PROFILE_REQUEST });
      const {
        loginReducer: { data }
      } = getState();
      const res = await userApi.getProfile(data.access_token);
      dispatch({ type: USER_CONSTANT.GET_PROFILE_SUCCESS, payload: res.data });
    }
    catch (err) {
      dispatch({
        type: USER_CONSTANT.GET_PROFILE_FAILURE,
        payload: err.response.data.message
      })
    }
  }
  
};
export default authAction;
