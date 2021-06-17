import axios from 'axios'
import { GET_POSTS, GET_POST, WRITE_POST, EDIT_POST, DELETE_POST }
from './types'
require('dotenv').config()
export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.API_POST}/posts`);
        const sorted = res.data.sort(function(a,b) {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        dispatch({
            type: GET_POSTS,
            payload: sorted
        })
    } catch (err) {
        console.log(err);
    }
}

export const getPostsByTag = (tag) => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.API_POST}/posts`);
        const sortedByTag = res.data.filter((post) => post.tags[0] === tag);
        const sorted = sortedByTag.sort(function(a,b) {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        dispatch({
            type: GET_POSTS,
            payload: sorted
        })
    } catch (err) {
        console.log(err)
    }
}

export const getPost = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.API_POST}/posts/${id}`)
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    } catch(err) {
        console.log(err)
    }
}
export const writePost = (data) => (dispatch) => {
    try {
        const { title, tags, html, createdAt } = data
        const res = axios.post(`${process.env.API_POST}/write`, { title, tags, html, createdAt})
        dispatch({
            type: WRITE_POST,
            payload: res.data
        })
    } catch(err) {
        console.log(err);
    }
}
export const deletePost = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://zoomni-log.herokuapp.com/posts/${id}`)
        dispatch({
            type: DELETE_POST,
            payload: { id }
        })
    } catch(err) {
        console.log(err)
    }
}

export const editPost = (id, data) => async (dispatch) => {
    try {
        const { title, tags, html } = data
        await axios.patch(`https://zoomni-log.herokuapp.com/posts/${id}`, { title, tags, html });
        dispatch({
            type: EDIT_POST,
            payload: { title, tags, html }
        })

    } catch(err) {
        console.log(err);
    }
}


