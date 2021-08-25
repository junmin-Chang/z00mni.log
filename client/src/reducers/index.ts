import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers'
import posts from './postReducer'


const rootReducer =  combineReducers({
    auth: authReducer,
    errors: errorReducer,
    posts
});
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>