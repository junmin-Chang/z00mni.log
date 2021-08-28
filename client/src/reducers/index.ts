import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers'
import postsReducer from "./postReducer";


const rootReducer =  combineReducers({
    auth: authReducer,
    errors: errorReducer,
    posts : postsReducer
});
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>