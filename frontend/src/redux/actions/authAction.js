import USER_CONSTANT from "../constants/userConstant";
export const login = () => {
  return {
      type: USER_CONSTANT.LOGIN
  }
}

export const getUserInfo = (res) => {
  return {
    type: USER_CONSTANT.GET_USER_INFO,
    payload: res.data.user
  }
}

export const logout = (res) => {
  return {
    type: USER_CONSTANT.LOGOUT
  }
}
