import React, {Fragment, useEffect, useState, useRef,  MutableRefObject} from 'react';
import Modal from './Modal/Modal';
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../actions/postActions'
import { withRouter} from 'react-router-dom'
import renderDate from '../utils/renderDate'
import { Wrapper } from './style/Wrapper'
import ModalContent from './style/StyledModal';
import { ContentSkeleton } from './style/Skeleton';
import { Helmet } from 'react-helmet'
import MDEditor from "@uiw/react-md-editor";


const Post : React.FC<any> = ({match, history, theme }) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts)
    const auth = useSelector(state => state.auth)
    const commentRef = useRef() as MutableRefObject<HTMLDivElement>
    
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getPost(match.params.id))
        const scriptEl =  document.createElement("script")
        const utteranceConfig = {
            src: "https://utteranc.es/client.js",
            repo: "junmin-Chang/z00mni.log",
            theme: theme ? "photon-dark" : "github-light",
            async: 'true',
            crossorigin: "anonymous",
            label: "✨💬 comments ✨",
            "issue-term": "pathname"
        }

        Object.entries(utteranceConfig).forEach(([key, value]) =>  {
            scriptEl.setAttribute(key, value)
        })
        commentRef.current.appendChild(scriptEl)
    },[])
   

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
                <h1 style={{
                    fontStyle: 'bold'
                }}>{post.title}</h1>
                <h3>{renderDate(post.createdAt)}</h3>
            </div>
            <MDEditor.Markdown source={post.html}/>

        </>
        )
    }

    return (
    <Fragment>
        <Helmet>
            <title>{post.title}</title>
        </Helmet>
        <div>
             <Modal open={modalOpen} close={closeModal} header="관리자 모드">
                <ModalContent history={history} match={match}
                    postState={post}
                /> 
            </Modal>   
        </div>

        <Wrapper>
            {auth.isAuthenticated ?
                (
                <button className="btn btn-delete" onClick={openModal}>관리자 메뉴</button>
            )
                : null
            }
            <div>

                {!post.title ? (
                    <ContentSkeleton theme={theme}/>
                ) : renderPost()}
            </div>
            <div ref={commentRef}>

            </div>
            
        </Wrapper>
    </Fragment>
    )
    
}

// const mapStateToProps = (state: { auth: any; }) => ({
//     auth: state.auth,
// });

export default withRouter(Post)