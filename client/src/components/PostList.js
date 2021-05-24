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
                <div className="tag-wrapper">
                    <h3>카테고리</h3>
                    <span className="tag-all" onClick={() => {
                        getPosts()
                    }} style={{
                        cursor: "pointer"
                    }}>전체</span>
                    {posts.map((post) => (
                        <span className="tags" key={post._id} onClick={() => {
                            getPostsByTag(post.tags[0])
                        }} style={{
                            cursor: "pointer"
                        }}>{`#`+post.tags[0]}</span>
                    ))}
                </div>
                <PostListItem posts={currentPosts(posts)}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
            </div>
        
            )}
            </div>
    )
    
}
export default withRouter(PostList);
