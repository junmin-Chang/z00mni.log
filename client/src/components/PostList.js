import React, {useEffect, useState} from 'react';
import PostListItem from './PostListItem';
import Pagination from './Pagination/Pagination'
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import Categories from './Categories';
import { useSelector ,  useDispatch } from 'react-redux'
import { getPosts } from '../actions/postActions'
import { Wrapper } from './style/Wrapper';
import Skeleton , { SkeletonTheme }from 'react-loading-skeleton'
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
        <Wrapper>
            {!posts.length ? 
            <SkeletonTheme color={theme ? '#202020' : '#fff'}
                highlightColor={theme ? '#444' : '#ddd'}
            >
                <Skeleton count={10} style={{lineHeight: '4rem', marginTop: '2rem'}}/> 
            </SkeletonTheme>

            : (  
            <div className="post-list">   
                <Categories/>
                <PostListItem posts={currentPosts(posts)}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
            </div>
            )}
            </Wrapper>
    )
    
}
export default withRouter(PostList);
