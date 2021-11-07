import USER_CONSTANT from '../constants/userConstant';


export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANT.LOGIN_REQUEST:
      return { loading: true }
    case USER_CONSTANT.LOGIN_SUCCESS:
      return { loading: false, data: action.payload}
    case USER_CONSTANT.LOGIN_FAILURE:
      return { loading: false, error: action.payload}
    default:
      return state
  }
}

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANT.REGISTER_REQUEST:
      return { loading: true }
    case USER_CONSTANT.REGISTER_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_CONSTANT.REGISTER_FAILURE:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
