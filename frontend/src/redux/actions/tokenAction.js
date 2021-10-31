import USER_CONSTANT from "../constants/userConstant";
import userApi from "../../apis/userApi";

export const tokenAction = {
  getAccessToken: () => async (dispatch) => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      dispatch({ type: USER_CONSTANT.GET_TOKEN_REQUEST });
      try {
        const res = await userApi.getTokenApi();
        dispatch({
          type: USER_CONSTANT.GET_TOKEN_SUCCESS,
          payload: { token: res.data.access_token },
        });
      } catch (err) {
        dispatch({
          type: USER_CONSTANT.GET_TOKEN_FAILURE,
          payload: err.response.data.message,
        });
      }
    }
  },
};
