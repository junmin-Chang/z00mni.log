import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPostsByTag, getPosts } from '../actions/postActions'

function Categories() {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    return (
        <div className="tag-wrapper">
        <h3>#카테고리</h3>
        <span className="tag-all" onClick={() => dispatch(getPosts())}>전체</span>
        <span className="tags" onClick={() => dispatch(getPostsByTag("리액트"))}>#React</span>
        <span className="tags" onClick={() => dispatch(getPostsByTag("Redux"))}>#Redux</span>
        <span className="tags" onClick={() => dispatch(getPostsByTag("NodeJS"))}>#NodeJS</span>
        <span className="tags" onClick={() => dispatch(getPostsByTag("삽질"))}>#삽질</span>
    </div>

    )
    
}
export default Categories;
