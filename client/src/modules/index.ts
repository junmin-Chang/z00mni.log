import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import postsReducer from "./posts/reducer";


const rootReducer =  combineReducers({
    auth: authReducer,
    posts : postsReducer
});
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>