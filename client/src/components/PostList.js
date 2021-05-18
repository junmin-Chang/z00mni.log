import axios from 'axios';
import React, {useEffect, useState} from 'react';
import PostListItem from './PostListItem';
import Pagination from './Pagination/Pagination'
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';

function PostList({ theme }) {
    const [posts, setPosts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;

    const currentPosts = (tmp) => {
        let currentPosts = 0;
        currentPosts = tmp.slice(firstIndex, lastIndex);
        return currentPosts;
    }

    const getPosts = async () => {
        const res = await axios.get('https://zoomni-log.herokuapp.com/posts')
        const sorted = res.data.sort(function(a,b) {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        setPosts(sorted);
    }

   
   
    useEffect(() => {
        getPosts();
    }, [posts])

    
    return (
        <div className="container">
            {!posts.length ? <ReactLoading className="loading" type="cubes" color={theme ? 'white': 'black'}/> : (
                <div className="post-list">
                
                <PostListItem posts={currentPosts(posts)}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
            </div>
        
            )}
            </div>
    )
    
}
export default withRouter(PostList);
