import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import './Modal/Modal.css'
import { IntroduceContent } from './Write/TextEditorForm';
import { connect } from 'react-redux'

function Post({ match, history, auth }) {
    
    const [post, setPost] = useState({});
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

    const getPost = async () => {
        const res = await axios.get(`https://zoomni-log.herokuapp.com/posts/${match.params.id}`);
        setPost(res.data)
    }

    const deletePost = async () => {
  
        await axios.delete(`https://zoomni-log.herokuapp.com/posts/${match.params.id}`)
        .then(history.push('/posts'));    
        
    }
    
    const updatePost =  () => {
    
            axios.patch(`https://zoomni-log.herokuapp.com/posts/${match.params.id}`, {
                title: postData.title,
                tags: postData.tags.split(','),
                html: postData.html
            })
            .then(history.push('/posts'));

    }

    const renderPost = () => {
        return (
            <IntroduceContent style={{
                marginTop:'2rem'
            }} dangerouslySetInnerHTML={{__html: post.html}}/>
        )
    }

    useEffect(() => {
        getPost();
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
                    <button className="btn btn-admin-delete" onClick={deletePost} >삭제</button>
                    <button className="btn btn-admin-delete" onClick={updatePost} >수정</button>
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

