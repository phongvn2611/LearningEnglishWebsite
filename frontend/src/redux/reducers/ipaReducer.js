import IPA_CONSTANT from "../constants/ipaConstant";

const initialState = {
    ipas: [],
    ipa: [],
    message: null,
    isIPALoading: false,
}
const ipaReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case IPA_CONSTANT.SET_IPA_LOADING:
      return {
        ...state,
        isIPALoading: payload,
      }
    case IPA_CONSTANT.SET_IPA_ERROR:
      return {
        ...state,
        ipas:[],
        message: payload,
        isIPALoading: true,
      }
    case IPA_CONSTANT.GET_IPA:
      return {
        ...state,
        ipa: payload,
        isIPALoading: true,
      }
    case IPA_CONSTANT.CREATE_IPA:
        return {
          ...state,
          ipa: payload,
          ipas: [...state.ipas, payload],
        }
    case IPA_CONSTANT.EDIT_IPA:
        const newIPAs = state.ipas.map((ipa) =>
              ipa._id === payload._id ? payload : ipa
        )
        return {
            ...state,
            ipa: payload,
            ipas: newIPAs,
        }
    case IPA_CONSTANT.DELETE_IPA:
        return {
            ...state,
            ipas: state.ipas.filter(
            (ipa) => ipa._id !== payload
            ),
        }
    case IPA_CONSTANT.GET_ALL_IPA:
        return {
            ...state,
            ipas: payload,
        }     
    default:
      return state
  }
}

export default ipaReducer
