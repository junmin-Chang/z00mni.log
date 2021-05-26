import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers'
import posts from './postReducer'


export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    posts
});