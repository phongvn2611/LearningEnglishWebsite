import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tokenReducer from './tokenReducer';
import messageReducer from './messageReducer';
import voiceReducer from './voiceReducer';
export const rootReducer = combineReducers({
  authReducer,
  tokenReducer,
  messageReducer,
  voiceReducer,
})

