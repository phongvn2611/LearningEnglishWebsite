import { combineReducers } from 'redux';
import { loginReducer } from './authReducer';
import tokenReducer from './tokenReducer';
export const rootReducer = combineReducers({
  loginReducer,
  tokenReducer,
})
