import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import './Modal/Modal.css'
import { IntroduceContent } from './Write/TextEditorForm';


function Post({ match, history }) {
    
    const [post, setPost] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [adminPassword, setAdminPassword] = useState('')

    const onChangePassword = (e) => {
        setAdminPassword(e.target.value)
    }


    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }


    const getPost = async () => {
        const res = await axios.get(`/posts/${match.params.id}`);
        setPost(res.data)
    }

    const deletePost = async () => {
        if (adminPassword === process.env.REACT_APP_ADMIN_PASSWORD) {
            await axios.delete(`/posts/${match.params.id}`)
            .then(history.push('/posts'));    
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
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
    },[post])


    return (
        <>
        <div>
             <Modal open={modalOpen} close={closeModal} header="관리자 모드">
                <div>
                <input type="text" name='password' value={adminPassword} onChange={onChangePassword} placeholder="관리자 비밀번호 입력"/>
                <button className="btn btn-admin-delete" onClick={deletePost} >삭제</button>
                </div>
                </Modal>   
        </div>
        <div className="container">
            <button className="btn btn-delete" onClick={openModal}>관리자 메뉴</button>         
            {renderPost()}</div>
        </>
    )
    
}
export default Post;