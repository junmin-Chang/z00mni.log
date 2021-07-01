import React from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { getPostsByTag, getPosts } from '../actions/postActions'
export const Tag = styled.span`
    display: inline-block;
    margin-right: 0.5rem;
    background: var(--post-list-item-tag);
    padding: 0 0.5rem;
    color: white;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 0.5rem;
`
const TagAll = styled(Tag)`
    background-color: royalblue;
`
function Categories() {
    const dispatch = useDispatch()
    return (
        <div className="tag-wrapper">
        <h3>#카테고리</h3>
        <TagAll onClick={() => dispatch(getPosts())}>전체</TagAll>
        <Tag onClick={() => dispatch(getPostsByTag("React"))}>#React</Tag>
        <Tag onClick={() => dispatch(getPostsByTag("Redux"))}>#Redux</Tag>
        <Tag onClick={() => dispatch(getPostsByTag("GraphQL"))}>#GraphQL</Tag>
        <Tag onClick={() => dispatch(getPostsByTag("NodeJS"))}>#NodeJS</Tag>
        <Tag onClick={() => dispatch(getPostsByTag("삽질"))}>#삽질</Tag>
    </div>

    )
    
}
export default Categories;
