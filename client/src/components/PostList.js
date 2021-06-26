import React, {useEffect, useState} from 'react';
import PostListItem from './PostListItem';
import Pagination from './Pagination/Pagination'
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import Categories from './Categories';
import { useSelector ,  useDispatch } from 'react-redux'
import { getPosts } from '../actions/postActions'
import './style/PostList.css'
function PostList({ theme }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();   

    const currentPosts = (tmp) => {
        let currentPosts = 0;
        currentPosts = tmp.slice(firstIndex, lastIndex);
        return currentPosts;
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    
    return (
        <div className="container">
            {!posts.length ? <ReactLoading className="loading" type="cubes" color={theme ? 'white': 'black'}/> : (
               
            <div className="post-list">   
                <Categories/>
                <PostListItem posts={currentPosts(posts)}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
            </div>
        
            )}
            </div>
    )
    
}
export default withRouter(PostList);
