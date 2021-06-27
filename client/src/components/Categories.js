import React from 'react';
import { useDispatch } from 'react-redux'
import { getPostsByTag, getPosts } from '../actions/postActions'

function Categories() {
    const dispatch = useDispatch()
    return (
        <div className="tag-wrapper">
        <h3>#카테고리</h3>
        <span className="tag-all" onClick={() => dispatch(getPosts())}>전체</span>
        <span className="tags" onClick={() => dispatch(getPostsByTag("React"))}>#React</span>
        <span className="tags" onClick={() => dispatch(getPostsByTag("Redux"))}>#Redux</span>
        <span className="tags" onClick={() => dispatch(getPostsByTag("GraphQL"))}>#GraphQL</span>
        <span className="tags" onClick={() => dispatch(getPostsByTag("NodeJS"))}>#NodeJS</span>
        <span className="tags" onClick={() => dispatch(getPostsByTag("삽질"))}>#삽질</span>
    </div>

    )
    
}
export default Categories;
