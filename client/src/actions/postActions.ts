import axios from 'axios'
import { GET_POSTS, GET_POST, WRITE_POST, EDIT_POST, DELETE_POST,GET_POSTS_TAG }
from './types'
require('dotenv').config()


export const getPosts = () => async (dispatch : any) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
        const sorted = res.data.sort(function(a : any  ,b : any) {
            return (+new Date(b.createdAt)) - (+new Date(a.createdAt))
        })
        if (sorted) {
            dispatch({
                type: GET_POSTS,
                payload: sorted
            })
        }
        
    } catch (err) {
        console.log(err);
    }
}
export const getPostsByTitle = (title : string) => async (dispatch : any) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
        const sortedByTitle = res.data.filter((post : any) => {
            return post.title.toLowerCase().includes(title)
        })
        dispatch({
            type: GET_POSTS,
            payload: sortedByTitle
        })
    } catch (err) {
        console.log(err)
    }
}

export const getPostsByTag = (tag : string) => async (dispatch : any) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
        const sortedByTag = res.data.filter((post : any) => post.tags.includes(tag));
        const sorted = sortedByTag.sort(function(a : any,b : any) {
            return (+new Date(b.createdAt)) - (+new Date(a.createdAt))
        })
        dispatch({
            type: GET_POSTS,
            payload: sorted
        })
    } catch (err) {
        console.log(err)
    }
 
    
}

export const getPost = (id : string) => async (dispatch : any) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API}/posts/${id}`)
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    } catch(err) {
        console.log(err)
    }
}
export const writePost = (data : any) => async (dispatch : any) => {
    try {
        const { title, tags, html, createdAt } = data
        const res = await axios.post(`${process.env.REACT_APP_API}/write`, {title, tags, html, createdAt})
        dispatch({
            type: WRITE_POST,
            payload: res.data
        })
    } catch(err) {
        console.log(err);
    }
}
export const deletePost = (id : string) => async (dispatch : any) => {
    try {
        await axios.delete(`${process.env.REACT_APP_API}/posts/${id}`)
        dispatch({
            type: DELETE_POST,
            payload: { id }
        })
    } catch(err) {
        console.log(err)
    }
}

export const editPost = (id : string, data : any) => async (dispatch : any) => {
    try {
        const { title, tags, html } = data
        await axios.patch(`${process.env.REACT_APP_API}/posts/${id}`, { title, tags, html });
        dispatch({
            type: EDIT_POST,
            payload: { title, tags, html }
        })

    } catch(err) {
        console.log(err);
    }
}

