import GRAMMAR_CONSTANT from "../constants/grammarConstant";
import grammarApi from "./../../apis/grammarApi";
import authReducer from "../reducers/authReducer";


export const getGrammar = (id) => {
    return async (dispatch, getState) => {
        try { 
          const {
            authReducer: { user },
          } = getState();

          const response = await grammarApi.getGrammar(id, user.access_token);
          if(response.status===200){
            dispatch({
              type: GRAMMAR_CONSTANT.GET_GRAMMAR,
              payload: response.data.grammar,
            })
          }
          else
          {
            dispatch({
              type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR,
              payload: response.data.message,
            })
          }
        } catch (error) {
          dispatch({ type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR })
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        }
      }
};

export const getAllGrammar = () => {
  return async (dispatch, getState) => {
      try { 
        dispatch({
          type: GRAMMAR_CONSTANT.SET_GRAMMAR_LOADING,
          payload:true,
        });

        const {
          authReducer: { user },
        } = getState();

        const response = await grammarApi.getAllGrammar(user.access_token);
        if(response.status===200){
          dispatch({
            type: GRAMMAR_CONSTANT.GET_ALL_GRAMMAR,
            payload: response.data.grammars,
          })
        }
        else
        {
          dispatch({
            type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR,
            payload: response.data.message,
          })
        }
      } catch (error) {
        dispatch({ type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR })
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      }
    }
};

export const getGrammarByLevel = (level) => {
  return async (dispatch, getState) => {
      try { 
        const {
          authReducer: { user },
        } = getState();

        const response = await grammarApi.getGrammarByLevel(level, user.access_token);
        if(response.status===200){
          dispatch({
            type: GRAMMAR_CONSTANT.GET_GRAMMAR_BY_LEVEL,
            payload: response.data.grammars,
          })
        }
        else
        {
          dispatch({
            type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR,
            payload: response.data.message,
          })
        }
      } catch (error) {
        dispatch({ type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR })
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      }
    }
};

export const getGrammarLevels = () => {
  return async (dispatch, getState) => {
      try { 
        const {
          authReducer: { user },
        } = getState();

        const response = await grammarApi.getGrammarLevels(user.access_token);
        if(response.status===200){
          dispatch({
            type: GRAMMAR_CONSTANT.GET_GRAMMAR_LEVELS,
            payload: response.data.levels,
          })
        }
        else
        {
          dispatch({
            type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR,
            payload: response.data.message,
          })
        }
      } catch (error) {
        dispatch({ type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR })
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      }
    }
};

export const postGrammar = (formData) => {
  return async (dispatch, getState) => {
      try { 
        const {
          authReducer: { user },
        } = getState();

        const response = await grammarApi.postGrammar(formData, user.access_token);
        if(response.status===200){
          dispatch({
            type: GRAMMAR_CONSTANT.CREATE_GRAMMAR,
            payload: response.data.grammar,
          })
          toast.success("Add successfully")
        }
        else
        {
          dispatch({
            type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR,
            payload: response.data.message,
          })
        }
      } catch (error) {
        dispatch({ type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR })
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      }
    }
};

export const putGrammar = (id, formData) => {
  return async (dispatch, getState) => {
      try { 
        const {
          authReducer: { user },
        } = getState();

        const response = await grammarApi.putGrammar(id, formData, user.access_token);
        if(response.status===200){
          dispatch({
            type: GRAMMAR_CONSTANT.EDIT_GRAMMAR,
            payload: response.data.grammar,
          })
          toast.success("Update successfully")
        }
        else
        {
          dispatch({
            type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR,
            payload: response.data.message,
          })
        }
      } catch (error) {
        dispatch({ type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR })
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      }
    }
};

export const deleteGrammar = (id) => {
  return async (dispatch, getState) => {
      try { 
        const {
          authReducer: { user },
        } = getState();

        const response = await grammarApi.deleteGrammar(id, user.access_token);
        if(response.status===200){
          dispatch({
            type: GRAMMAR_CONSTANT.DELETE_GRAMMAR,
            payload: id,
          })
          toast.success(response.data.message)
        }
        else
        {
          dispatch({
            type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR,
            payload: response.data.message,
          })
        }
      } catch (error) {
        dispatch({ type: GRAMMAR_CONSTANT.SET_GRAMMAR_ERROR })
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      }
    }
};
