import React from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { getPostsByTagAsync, getPostsAsync } from '../actions/postActions'
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
const Categories : React.FC = () => {
    const dispatch = useDispatch()
    return (
        <div className="tag-wrapper">
        <h3>#카테고리</h3>
        <TagAll onClick={() => dispatch(getPostsAsync())}>전체</TagAll>
        <Tag onClick={() => dispatch(getPostsByTagAsync("React"))}>#React</Tag>
        <Tag onClick={() => dispatch(getPostsByTagAsync("NextJS"))}>#NextJS</Tag>
        <Tag onClick={() => dispatch(getPostsByTagAsync("Redux"))}>#Redux</Tag>
        <Tag onClick={() => dispatch(getPostsByTagAsync("GraphQL"))}>#GraphQL</Tag>
        <Tag onClick={() => dispatch(getPostsByTagAsync("Apollo"))}>#Apollo</Tag>
        <Tag onClick={() => dispatch(getPostsByTagAsync("NodeJS"))}>#NodeJS</Tag>
        <Tag onClick={() => dispatch(getPostsByTagAsync("삽질"))}>#삽질</Tag>
        <Tag onClick={() => dispatch(getPostsByTagAsync("생각"))}>#생각</Tag>

    </div>

    )
    
}
export default Categories;
