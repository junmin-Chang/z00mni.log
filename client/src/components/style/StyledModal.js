import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { editPost, deletePost } from '../../actions/postActions'


const ModalInputTags = styled.input.attrs(props => ({
    type: "text",
    name: "tags",
}))`
    position: relative;
    z-index: 999;
`
const ModalInputTitle = styled(ModalInputTags).attrs(props => ({
    type: "text",
    name: "title",
}))`
    width: 100%;
`
const ModalInputHTML = styled(ModalInputTitle).attrs(props => ({
    type: "text",
    name: "html",
}))`
    height: 10rem;
`

const ModalButton = styled.button`
    border-radius:4px;
    padding: 0.3rem;
    background: red;
    color: white;
    margin-left: 1rem;
`

const ModalContent = ({ history, match, postState }) => {
    const dispatch = useDispatch();

    const editFn = () => {
        dispatch(editPost(match.params.id, postData))
        history.push('/posts')
    }
    const deleteFn = () => {
        dispatch(deletePost(match.params.id))
        history.push('/posts')
    }
    const [postData, setPostData] = useState({
        title: postState.title,
        tags: postState.tags,
        html: postState.html
    })
    return (
        <div>
            <ModalInputTitle 
            value={postData.title} 
            defaultValue={postState.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>

            <ModalInputTags 
            value={postData.tags} 
            defaultValue={postState.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value})}
            />

            <ModalInputHTML as="textarea" 
            value={postData.html} 
            defaultValue={postState.html}
            onChange={(e) => setPostData({ ...postData, html: e.target.value})}
            />
            
            <ModalButton 
            onClick={deleteFn}>삭제</ModalButton>

            <ModalButton 
            onClick={editFn}>수정</ModalButton>
        </div>
    )
}
export default ModalContent