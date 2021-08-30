import {
    getPostsAction,
    deletePostAction,
    editPostAction,
    getPostErrorAction,
    getPostsErrorAction,
    getPostsSuccessAction,
    getPostSuccessAction,
    writePostAction,
    getPostAction
} from "./actions";
import {fetchPost, fetchPosts, fetchPostsTag, editPost, deletePost, writePost} from "../../api/posts";
require('dotenv').config()


export const getPostsAsync = () => async (dispatch : any) => {
    dispatch(getPostsAction())
    try {
        const sorted = await fetchPosts()
        if (sorted) {
            dispatch(getPostsSuccessAction(sorted))
        }
    } catch (err) {
        dispatch(getPostsErrorAction(err))
    }
}


export const getPostsByTagAsync = (tag : string) => async (dispatch : any) => {
    dispatch(getPostsAction())
    try {
        const sorted = await fetchPostsTag(tag)
        if (sorted) {
            dispatch(getPostsSuccessAction(sorted))
        }
    } catch (err) {
        dispatch(getPostsErrorAction(err))
    }
}

export const getPostAsync = (id : string) => async (dispatch : any) => {
    dispatch(getPostAction())
    try {
        const post = await fetchPost(id)
        dispatch(getPostSuccessAction(id, post))
    } catch(err) {
        dispatch(getPostErrorAction(err))
    }
}
export const writePostAsync = (data : any) => async (dispatch : any) => {

    try {
        const result = await writePost(data)
        dispatch(writePostAction(result))
    } catch(err) {
        console.log(err)
    }
}
export const deletePostAsync = (id : string) => async (dispatch : any) => {
    try {
        await deletePost(id)
        dispatch(deletePostAction(id))
    } catch(err) {
        console.log(err)
    }
}

export const editPostAsync = (id : string, data : any) => async (dispatch : any) => {
    try {
        await editPost(id, data)
        dispatch(editPostAction(id, data))
    } catch(err) {
        console.log(err);
    }
}


