import USER_CONSTANT from "../constants/userConstant";
import userApi from "./../../apis/userApi";
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
      localStorage.setItem("firstLogin", true);
    } catch (err) {
      dispatch({
        type: USER_CONSTANT.LOGIN_FAILURE,
        payload: err.response.data.message
      });
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
  }
};
export default authAction;
