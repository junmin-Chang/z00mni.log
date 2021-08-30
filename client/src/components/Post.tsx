import React, {Fragment, useEffect, useState, useRef,  MutableRefObject} from 'react';
import Modal from './Modal/Modal';
import { useDispatch, useSelector } from 'react-redux'
import {getPostAsync} from "../modules/posts/thunks";
import {RouteComponentProps, withRouter} from 'react-router-dom'
import renderDate from '../utils/renderDate'
import { Wrapper } from './style/Wrapper'
import ModalContent from './style/StyledModal';
import { ContentSkeleton } from './style/Skeleton';
import { Helmet } from 'react-helmet'
import {RootState} from "../modules";
import MDEditor from "@uiw/react-md-editor";
interface RouterProps {
    params: any
    id: string
}
interface PostProps extends RouteComponentProps<RouterProps>{
    theme: boolean
}
const Post : React.FC<any> = ({match, history, theme } : PostProps) => {
    const dispatch = useDispatch()
    const { loading, data } = useSelector((state : RootState) => state.posts.post)
    const {isAuthenticated}  = useSelector((state : RootState) => state.auth)
    const commentRef = useRef() as MutableRefObject<HTMLDivElement>
    
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {

        dispatch(getPostAsync(match.params.id))
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


    return (
    <Fragment>
        <Helmet>
            <title>{data?.title}</title>
        </Helmet>
        <div>
             <Modal open={modalOpen} close={closeModal} header="관리자 모드">
                <ModalContent history={history} match={match}
                    postState={data}
                /> 
            </Modal>   
        </div>

        <Wrapper>
            {isAuthenticated ?
                (
                <button className="btn btn-delete" onClick={openModal}>관리자 메뉴</button>
            )
                : null
            }
            <div>
                {loading &&
                <ContentSkeleton theme={theme}/>
                }
                {data &&
                <>
                    <div>
                        <h1 style={{
                            fontStyle: 'bold'
                        }}>{data?.title}</h1>
                        <h3>{renderDate(data.createdAt)}</h3>
                    </div>
                    <MDEditor.Markdown source={data?.html}/>
                </>
                }
            </div>
            <div ref={commentRef}>

            </div>
            
        </Wrapper>
    </Fragment>
    )
    
}
export default withRouter(Post)