import axios from 'axios';
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from './types';

export function loginUser(dataToSubmit) {
    const req = axios.post('/login', dataToSubmit)
        .then(res => res.data);

        return {
            type: LOGIN_USER,
            payload: req
        }
}

export function registerUser(dataToSubmit) {
    const req = axios.post('/register', dataToSubmit)
        .then(res => res.data);

    return {
        type: REGISTER_USER,
        payload: req
    }
}

export function auth() {
    const req = axios.get('/auth')
        .then(res => res.data);

    return {
        type: AUTH_USER,
        payload: req
    }
}