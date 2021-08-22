import React, {useEffect, useState} from 'react';
import PostListItem from './PostListItem';
import Pagination from './Pagination/Pagination'
import { withRouter } from 'react-router-dom';
import Categories from './Categories';
import { useSelector ,  useDispatch } from 'react-redux'
import { getPosts } from '../actions/postActions'
import { Wrapper } from './style/Wrapper';
import { ListSkeleton } from './style/Skeleton';
import { Helmet } from 'react-helmet'


const PostList: React.FC<any> = ({ theme }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;
    let posts = useSelector(state => state.posts);
    const dispatch = useDispatch();   
    const currentPosts = (tmp : object[]) => {
        let currentPosts = [];
        currentPosts = tmp.slice(firstIndex, lastIndex);
        return currentPosts;
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [])

    return (
        <>
            <Helmet>
                <title>포스트 목록</title>
            </Helmet>
            <Wrapper>

                {!posts.length ? 
                    <ListSkeleton theme={theme}/>
                : (  
                <div className="post-list">   
                    <Categories/>
                    <PostListItem posts={currentPosts(posts)}/>
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
                </div>
                )}
                </Wrapper>
        </>
    )
    
}
export default withRouter(PostList);
