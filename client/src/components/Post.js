import React, { Fragment, useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import './Modal/Modal.css'
import { IntroduceContent } from './Write/TextEditorForm';
import { connect, useDispatch, useSelector } from 'react-redux'
import { deletePost, getPost, editPost } from '../actions/postActions'

function Post({ match, history, auth }) {
    const dispatch = useDispatch();
    // const [post, setPost] = useState({});
    const post = useSelector(state => state.posts)
    const [postData, setPostData] = useState({
        title: post.title,
        tags: post.tags,
        html: post.html
    })
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    const renderDate = (dateString) => {
        const date = new Date(dateString);
        const monthName = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

        return `${date.getFullYear()}년 ${monthName[date.getMonth()]} ${date.getDate()}일`;
    }

    const renderPost = () => {
        return (
            <IntroduceContent style={{
                marginTop:'2rem'
            }} dangerouslySetInnerHTML={{__html: post.html}}/>
        )
    }

    useEffect(() => {
        dispatch(getPost(match.params.id))
    },[])


    return (
    <Fragment>
        <div>
             <Modal open={modalOpen} close={closeModal} header="관리자 모드">
                <div>
                    <input className="edit-title" name="title" type="text" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} defaultValue={post.title}/>
                    <input className="edit-tags" name="tags" type="text" value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})} defaultValue={post.tags}/>
                    <textarea className="edit-html" name="html" type="text" value={postData.html} onChange={(e) => setPostData({...postData, html: e.target.value})} defaultValue={post.html}
                    />
                    <button className="btn btn-admin-delete" onClick={() => {
                         dispatch(deletePost(match.params.id))
                         history.push('/posts')
                    }} >삭제</button>
                    <button className="btn btn-admin-delete" onClick={() => {
                        dispatch(editPost(match.params.id, postData))
                        history.push('/posts')
                    }} >수정</button>
                </div>
            </Modal>   
        </div>


        <div className="container">
            {auth.isAuthenticated ? (
                <button className="btn btn-delete" onClick={openModal}>관리자 메뉴</button>         
            
            ) : (
                null
            )}
            <div>
                <h1>{post.title}</h1>
                <h3>{renderDate(post.createdAt)}</h3>
            </div>
            
            {renderPost()}
        </div>
    </Fragment>
    )
    
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
)(Post);

