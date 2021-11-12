import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tokenReducer from './tokenReducer';
import messageReducer from './messageReducer';
export const rootReducer = combineReducers({
  authReducer,
  tokenReducer,
  messageReducer
})
