import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Content } from './style/Content';

const StyledLink = styled(Link)`
    width: 100%;
    display: block;
    padding-top: 1rem;
    text-align: left;
    background-color: ${({ theme }) => theme.postItem};
    padding: 2rem;
    border-radius: 16px;
    margin-bottom: 1rem;
    &:hover {
        color: #2ec4ff;
    }
`


function PostListItem({ posts } : any) {
    return (  
        posts.map((post : any) => (
            <StyledLink to={`/posts/${post._id}`} key={post._id}>
                <Content post={post}/>
            </StyledLink> 
        ))
    )
}
export default PostListItem;
