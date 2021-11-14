import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tokenReducer from './tokenReducer';
import messageReducer from './messageReducer';
import listeningReducer from './listeningReducer';
import quizReducer from './quizReducer';
export const rootReducer = combineReducers({
  authReducer,
  tokenReducer,
  messageReducer,
  listeningReducer,
  quizReducer
})
