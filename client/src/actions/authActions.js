import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {
    SET_CURRENT_USER,
    USER_LOADING
} from './types';
require('dotenv').config()
//register action
export const registerUser = (userData, history) => dispatch => {
    axios
        .post(`${process.env.REACT_APP_API}/api/users/register`, userData)
        .then(res => history.push("/login"))
        .catch(err => {
            return;
        })
}
// login action
export const loginUser = userData => dispatch => {
    axios.post(`${process.env.REACT_APP_API}/api/users/login`, userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(() => {
            alert("접근 제한.")
        })
}

// user 등록 action
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
        
    }
}

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}