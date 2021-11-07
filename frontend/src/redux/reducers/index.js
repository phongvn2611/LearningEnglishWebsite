import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './authReducer';
import tokenReducer from './tokenReducer';
import messageReducer from './messageReducer';
export const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  tokenReducer,
  messageReducer
})
