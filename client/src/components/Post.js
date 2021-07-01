import React, { Fragment, useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import { PostContent } from './Write/TextEditorForm';
import { connect, useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import { getPost } from '../actions/postActions'
import ReactLoading from 'react-loading'
import { withRouter } from 'react-router-dom'
import renderDate from '../utils/renderDate'
import { Wrapper } from './style/Wrapper'
import ModalContent from './style/StyledModal';
function Post({ match, history, auth, theme }) {
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts)
    
    const [modalOpen, setModalOpen] = useState(false);
   

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    const renderPost = () => {
        return (
        <>
            <div>
                <h1>{post.title}</h1>
                <h3>{renderDate(post.createdAt)}</h3>
            </div>
            <PostContent style={{
                marginTop:'2rem'
            }} dangerouslySetInnerHTML={{__html: post.html}}/>
        </>
        )
    }
    useEffect(() => {
        dispatch(getPost(match.params.id))
    },[dispatch, match.params.id])


    return (
    <Fragment>
        <div>
             <Modal open={modalOpen} close={closeModal} header="관리자 모드">
                <ModalContent history={history} match={match}
                    postState={post}
                /> 
            </Modal>   
        </div>


        <Wrapper>
            {auth.isAuthenticated ? (
                <button className="btn btn-delete" onClick={openModal}>관리자 메뉴</button>
            ) : (
                null
            )}
            <div>

                {!post.title ? (
                    <ReactLoading className="loading" type="cubes" color={theme ? 'white': 'black'}/>
                ) : renderPost()}
            </div>
            
        </Wrapper>
    </Fragment>
    )
    
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default compose(
    withRouter,
    connect(mapStateToProps)
  )(Post);
