import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Content } from './style/Content';

const StyledLink = styled(Link)`
    width: 100%;
    display: block;
    padding-top: 1rem;
    text-align: left;
    border-bottom:  1px solid;
    border-color: ${({ theme }) => theme.text};
    &:hover {
        color: #2ec4ff;
    }
`

function PostListItem({ posts }) {
    return (
        
        posts.map((post) => (
            <StyledLink to={`/posts/${post._id}`} key={post._id}>
                <Content post={post}/>
            </StyledLink> 
        ))
    )
}
export default PostListItem;
