import React, {useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector ,  useDispatch } from 'react-redux'
import { Wrapper } from './style/Wrapper';
import { ListSkeleton } from './style/Skeleton';
import { Helmet } from 'react-helmet'
import {getPostsAsync} from "../modules/posts/thunks";
import {RootState} from "../modules";
import Pagination from './Pagination/Pagination'
import Categories from "./Categories";
import PostListItem from "./PostListItem";
interface PostListProps {
    theme : boolean
}


const PostList: React.FC<any> = ({ theme }: PostListProps) => {

    let {loading, data} = useSelector((state : RootState) => state.posts.posts);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;
    const dispatch = useDispatch();
    const currentPosts = (tmp : object[]) => {
        let currentPosts : object[] = [];
        currentPosts = tmp.slice(firstIndex, lastIndex);
        return currentPosts;
    }

    useEffect(() => {
        if (data) return;
        dispatch(getPostsAsync())
    }, [])


    return (
        <>
            <Helmet>
                <title>포스트 목록</title>
            </Helmet>
                <Wrapper>
                    {loading &&
                    <ListSkeleton theme={theme}/>}

                    {data &&
                    <div className="post-list">
                            <Categories/>
                            <PostListItem posts={currentPosts(data)}/>
                            <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={setCurrentPage}/>
                        </div>
                    }

                </Wrapper>

        </>
    )
}
export default withRouter(PostList);
