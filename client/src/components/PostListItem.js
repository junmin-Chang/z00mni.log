import React from 'react';
import { Link } from 'react-router-dom';
import './style/PostListItem.css'
function PostListItem({ posts }) {
    const renderDate = (dateString) => {
        const date = new Date(dateString);
        const monthName = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

        return `${date.getFullYear()}년 ${monthName[date.getMonth()]} ${date.getDate()}일`;
    }
    
    const renderTags = (tags) => {
        return tags.map((tag) => {
            return <span className="tag" key={tag}>{tag}</span>
        })
    }


    
    return (
        
        posts.map((post) => (
            <Link to={`/posts/${post._id}`} className="post-list-item" key={post._id}>
                <h3 className="title">{post.title}</h3>
                <span className="date">{renderDate(post.createdAt)}</span>
                <div className="tags">{renderTags(post.tags)}</div>
            </Link>
        ))
       
       
    
    )
    
}
export default PostListItem;
