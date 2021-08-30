import {
    DELETE_POST,
    EDIT_POST,
    GET_POST, GET_POST_ERROR,
    GET_POST_SUCCESS,
    GET_POSTS,
    GET_POSTS_ERROR,
    GET_POSTS_SUCCESS,
    WRITE_POST
} from "./types";

export const getPostsAction = () => {
    return {
        type : GET_POSTS
    }
}
export const getPostsSuccessAction = (sorted : any) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: sorted
    }
}
export const getPostsErrorAction = (err: any) => {
    return {
        type: GET_POSTS_ERROR,
        payload: err
    }
}

export const getPostAction = () => {
    return {
        type: GET_POST
    }
}
export const getPostSuccessAction = (id: string, post : any) => {
    return {
        type: GET_POST_SUCCESS,
        payload: post
    }
}
export const getPostErrorAction = (err: any) => {
    return {
        type: GET_POST_ERROR,
        payload: err
    }
}
export const writePostAction = (data: any) => {
    return{
        type: WRITE_POST,
        payload: data
    }
}

export const deletePostAction = (_id: string) => {
    return {
        type: DELETE_POST,
        payload: { _id }
    }
}
export const editPostAction = (id: string, {title, tags, html, createdAt} : any) => {
    return {
        type: EDIT_POST,
        payload: {title, tags, html, createdAt}
    }
}

export type PostAction =
    ReturnType<typeof getPostsSuccessAction> |
    ReturnType<typeof getPostsErrorAction> |
    ReturnType<typeof getPostsAction> |
    ReturnType<typeof getPostSuccessAction> |
    ReturnType<typeof getPostErrorAction> |
    ReturnType<typeof getPostAction> |
    ReturnType<typeof deletePostAction> |
    ReturnType<typeof editPostAction> |
    ReturnType<typeof writePostAction>
