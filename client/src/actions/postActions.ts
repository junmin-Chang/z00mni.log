import axios from 'axios'
import {getPosts, getPost, writePost, deletePost, editPost } from "./actions";
require('dotenv').config()


export const getPostsAsync = () => async (dispatch : any) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
        const sorted = res.data.sort(function(a : any  ,b : any) {
            return (+new Date(b.createdAt)) - (+new Date(a.createdAt))
        })
        if (sorted) {
            dispatch(getPosts(sorted))
        }
        
    } catch (err) {
        console.log(err);
    }
}


export const getPostsByTagAsync = (tag : string) => async (dispatch : any) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
        const sortedByTag = res.data.filter((post : any) => post.tags.includes(tag));
        const sorted = sortedByTag.sort(function(a : any,b : any) {
            return (+new Date(b.createdAt)) - (+new Date(a.createdAt))
        })
        if (sorted) {
            dispatch(getPosts(sorted))
        }
    } catch (err) {
        console.log(err)
    }
}

export const getPostAsync = (id : string) => async (dispatch : any) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API}/posts/${id}`)
        dispatch(getPost(id, res.data))
    } catch(err) {
        console.log(err)
    }
}
export const writePostAsync = (data : any) => async (dispatch : any) => {
    try {
        const { title, tags, html, createdAt } = data
        const res = await axios.post(`${process.env.REACT_APP_API}/write`, {title, tags, html, createdAt})
        dispatch(writePost(res.data))
    } catch(err) {
        console.log(err);
    }
}
export const deletePostAsync = (id : string) => async (dispatch : any) => {
    try {
        await axios.delete(`${process.env.REACT_APP_API}/posts/${id}`)
        dispatch(deletePost(id))
    } catch(err) {
        console.log(err)
    }
}

export const editPostAsync = (id : string, data : any) => async (dispatch : any) => {
    try {
        const { title, tags, html } = data
        await axios.patch(`${process.env.REACT_APP_API}/posts/${id}`, { title, tags, html });
        dispatch(editPost(id, data))
    } catch(err) {
        console.log(err);
    }
}


