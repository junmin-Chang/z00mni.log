import axios from 'axios';
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from './types';

export async function loginUser(dataToSubmit) {
    const req = await axios.post('https://zoomni-log.herokuapp.com/api/users/login', dataToSubmit)
        .then(res => res.data);

        return {
            type: LOGIN_USER,
            payload: req
        }
}

export async function registerUser(dataToSubmit) {
    const req = await axios.post('https://zoomni-log.herokuapp.com/api/users/register', dataToSubmit)
        .then(res => res.data);

    return {
        type: REGISTER_USER,
        payload: req
    }
}

export async function auth() {
    const req = await axios.get('https://zoomni-log.herokuapp.com/api/users/auth')
        .then(res => res.data);

    return {
        type: AUTH_USER,
        payload: req
    }
}