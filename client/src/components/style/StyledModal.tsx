import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import {editPostAsync, deletePostAsync } from "../../modules/posts/thunks";
const ModalInput = styled.input`
    width: 100%;
    position: relative;
    z-index: 999;
`

const ModalTextArea = styled.textarea`
    height: 10rem;
`

const ModalButton = styled.button`
    border-radius:4px;
    padding: 0.3rem;
    background: red;
    color: white;
    margin-left: 1rem;
`

const ModalContent : React.FC<any> = ({ history, match, postState }) => {
    const dispatch = useDispatch();

    const editFn = () => {
        dispatch(editPostAsync(match.params.id, postData))
        history.push('/posts')
    }
    const deleteFn = () => {
        dispatch(deletePostAsync(match.params.id))
        history.push('/posts')
    }
    const [postData, setPostData] = useState({
        title: postState.title,
        tags: postState.tags,
        html: postState.html
    })
    return (
        <div>
            <ModalInput
                type="text"
                name="title"
                value={postData.title}
                defaultValue={postState.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>

            <ModalInput
                type="text"
                name="tags"
                value={postData.tags}
                defaultValue={postState.tags}
                onChange={(e) => setPostData({ ...postData, tags: e.target.value})}
            />

            <ModalTextArea
                name="html"
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