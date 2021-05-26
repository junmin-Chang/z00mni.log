import axios from 'axios';
import React, {useEffect, useState} from 'react';
import PostListItem from './PostListItem';
import Pagination from './Pagination/Pagination'
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import Categories from './Categories';

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

    // 날짜별(default)
    const getPosts = async () => {
        const res = await axios.get('https://zoomni-log.herokuapp.com/posts')
        const sorted = res.data.sort(function(a,b) {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        setPosts(sorted);
    }
    // 태그별 정렬
   const getPostsByTag = async (tag) => {
        const res = await axios.get('https://zoomni-log.herokuapp.com/posts')
        const sorted = res.data.filter((post) => post.tags[0] === tag);
        setPosts(sorted);
   }
   
    useEffect(() => {
        getPosts();
    }, [])

    
    return (
        <div className="container">
            {!posts.length ? <ReactLoading className="loading" type="cubes" color={theme ? 'white': 'black'}/> : (
               
            <div className="post-list">    
                <Categories getPosts={getPosts} getPostsByTag={getPostsByTag}/>
                <PostListItem posts={currentPosts(posts)}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
            </div>
        
            )}
            </div>
    )
    
}
export default withRouter(PostList);
