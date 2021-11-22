import USER_CONSTANT from "../constants/userConstant";

const initialState = {
  user: [],
  isAuth: false,
  role: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CONSTANT.GET_USER_INFO:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        role: action.payload.roleType
      }
    case USER_CONSTANT.LOGOUT:
      return {
        ...state,
        user: [],
        isAuth: false,
        role: ''
      }
    default:
      return state;
  }
};

export default authReducer;
