import {SET_CURRENT_USER} from "./types";

export type AuthActions = ReturnType<typeof setCurrentUserAction>

// user 등록 action
export const setCurrentUserAction = (decoded : object) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    }
}