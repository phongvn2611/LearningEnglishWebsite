import USER_CONSTANT from './../constants/userConstant';

const tokenReducer = (state = '', action) => {
  switch (action.type) {
    case USER_CONSTANT.GET_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
export default tokenReducer;
