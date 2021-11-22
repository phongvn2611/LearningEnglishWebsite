import IPA_CONSTANT from "../constants/ipaConstant";
import ipaApi from "./../../apis/ipaApi";
import authReducer from "../reducers/authReducer";
import IPA_CONSTANT from "../constants/ipaConstant";

export const getIPA = (id) => {
    return async (dispatch, getState) => {
        try { 
          const {
            authReducer: { user },
          } = getState();

          const response = await ipaApi.getIPA(id, user.access_token);
          if(response.status===200){
            dispatch({
              type: IPA_CONSTANT.GET_IPA,
              payload: response.data.ipa,
            })
          }
          else
          {
            dispatch({
              type: IPA_CONSTANT.SET_IPA_ERROR,
              payload: response.data.message,
            })
          }
        } catch (error) {
          dispatch({ type: IPA_CONSTANT.SET_IPA_ERROR })
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        }
      }
};

export const getAllIPA = () => {
    return async (dispatch, getState) => {
        try { 
          dispatch({
            type: IPA_CONSTANT.SET_IPA_LOADING,
            payload:true,
          });

          const {
            authReducer: { user },
          } = getState();

          const response = await ipaApi.getAllIPA(user.access_token);
          if(response.status===200){
            dispatch({
              type: IPA_CONSTANT.GET_ALL_IPA,
              payload: response.data.ipas,
            })
          }
          else
          {
            dispatch({
              type: IPA_CONSTANT.SET_IPA_ERROR,
              payload: response.data.message,
            })
          }
        } catch (error) {
          dispatch({ type: IPA_CONSTANT.SET_IPA_ERROR })
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        }
      }
};

export const postIPA = (formData) => {
    return async (dispatch, getState) => {
        try { 
          const {
            authReducer: { user },
          } = getState();

          const response = await ipaApi.postIPA(formData, user.access_token);
          if(response.status===200){
            dispatch({
              type: IPA_CONSTANT.CREATE_IPA,
              payload: response.data.ipa,
            })
            toast.success("Add successfully")
          }
          else
          {
            dispatch({
              type: IPA_CONSTANT.SET_IPA_ERROR,
              payload: response.data.message,
            })
          }
        } catch (error) {
          dispatch({ type: IPA_CONSTANT.SET_IPA_ERROR })
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        }
      }
};

export const putIPA = (id, formData) => {
    return async (dispatch, getState) => {
        try { 
          const {
            authReducer: { user },
          } = getState();

          const response = await ipaApi.putIPA(id, formData, user.access_token);
          if(response.status===200){
            dispatch({
              type: IPA_CONSTANT.EDIT_IPA,
              payload: response.data.ipa,
            })
            toast.success("Edit successfully")
          }
          else
          {
            dispatch({
              type: IPA_CONSTANT.SET_IPA_ERROR,
              payload: response.data.message,
            })
          }
        } catch (error) {
          dispatch({ type: IPA_CONSTANT.SET_IPA_ERROR })
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        }
      }
};

export const deleteIPA = (id) => {
    return async (dispatch, getState) => {
        try { 
          const {
            authReducer: { user },
          } = getState();

          const response = await ipaApi.deleteIPA(id, user.access_token);
          if(response.status===200){
            dispatch({
              type: IPA_CONSTANT.DELETE_IPA,
              payload: id,
            })
            toast.success(response.data.message)
          }
          else
          {
            dispatch({
              type: IPA_CONSTANT.SET_IPA_ERROR,
              payload: response.data.message,
            })
          }
        } catch (error) {
          dispatch({ type: IPA_CONSTANT.SET_IPA_ERROR })
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        }
      }
};