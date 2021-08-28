import {
    SET_CURRENT_USER,
} from "../actions/types"
import {AuthActions} from "../actions/authActions";

const isEmpty = require("is-empty");
type Auth = {
    isAuthenticated: boolean
    user: object
    loading: boolean
}

const initialState : Auth = {
    isAuthenticated: false,
    user: {},
    loading: false
};

export default function auth(state: Auth = initialState, action : any) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}