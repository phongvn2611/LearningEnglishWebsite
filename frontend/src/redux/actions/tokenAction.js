import USER_CONSTANT from "../constants/userConstant";
import userApi from "../../apis/userApi";

export const tokenAction = {
  getToken: (res) => {
    return {
      type: USER_CONSTANT.GET_TOKEN,
      payload: res.data.access_token
    }
  }
};
