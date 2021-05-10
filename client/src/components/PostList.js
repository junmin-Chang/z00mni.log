import axios from 'axios';
import React, {useEffect, useState} from 'react';
import PostListItem from './PostListItem';
import Pagination from './Pagination/Pagination'
function PostList() {
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
        setPosts(res.data);
    }

   
   
    useEffect(() => {
        getPosts();
    }, [posts])

    
    return (
        <div className="container">

            <div className="post-list">
               
                <PostListItem posts={currentPosts(posts)}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
            </div>
        </div>
    )
    
}
export default PostList;
