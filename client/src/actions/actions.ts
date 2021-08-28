import {DELETE_POST, EDIT_POST, GET_POST, GET_POSTS, WRITE_POST} from "./types";

export const getPosts = (sorted : any) => {
    return {
        type: GET_POSTS,
        payload: sorted
    }
}

export const getPost = (id: string, post : any) => {
    return {
        type: GET_POST,
        payload: post
    }
}
export const writePost = (data: any) => {
    return{
        type: WRITE_POST,
        payload: data
    }
}

export const deletePost = (id: string) => {
    return {
        type: DELETE_POST,
        payload: { id }
    }
}
export const editPost = (id: string, {title, tags, html, createdAt} : any) => {
    return {
        type: EDIT_POST,
        payload: {title, tags, html, createdAt}
    }
}

export type PostAction = 
    ReturnType<typeof getPosts> |
    ReturnType<typeof getPost> |
    ReturnType<typeof deletePost> |
    ReturnType<typeof editPost> |
    ReturnType<typeof writePost>
