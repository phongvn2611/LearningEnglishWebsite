import LISTEN_CONSTANT from '../constants/listeningConstant';


export const listenDetailsReducer = (
    state = { data},
    action
  ) => {
    switch (action.type) {
      case LISTEN_CONSTANT.GET_LISTEN_BY_ID_REQUEST:
        return { loading: true, ...state };
      case LISTEN_CONSTANT.GET_LISTEN_BY_ID_SUCCESS:
        return { loading: false, data: action.payload };
      case LISTEN_CONSTANT.GET_LISTEN_BY_ID_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };