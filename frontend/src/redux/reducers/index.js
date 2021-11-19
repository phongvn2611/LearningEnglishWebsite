import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tokenReducer from './tokenReducer';
import messageReducer from './messageReducer';
import listeningReducer from './listeningReducer';
export const rootReducer = combineReducers({
  authReducer,
  tokenReducer,
  messageReducer,
  listeningReducer,
})
