import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import {useDispatch} from "react-redux";
import {writePost} from "../../actions/postActions";
export const MarkdownEditor = ({ history }) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState({
        title: "",
        tags: "",
    });
    const [markdown, setMarkdown] = useState("")
    const getContent = (e) => {
        const { name, value } = e.target

        setContent({
            ...content,
            [name] : value
        })
    }

    return (
        <div>
            <input className="input input-title" type="text" name="title" placeholder="제목" onChange={getContent}/>
            <input className="input input-tags" type="text" name="tags" placeholder="태그" onChange={getContent}/>
            <MDEditor value={markdown} onChange={setMarkdown}/>
            <MDEditor.Markdown source={markdown}/>
            <button className="btn btn-post"
                    onClick={() => {
                        dispatch(writePost({
                            title: content.title,
                            tags: content.tags.split(','),
                            html: markdown,
                            createdAt: new Date()
                        }))
                        alert('등록 완료!');
                        history.push('/posts')
                    }}>완료</button>
        </div>
    )
}